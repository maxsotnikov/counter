import {universalCounterInitialState} from './data.ts';
import {createAction, createReducer} from '@reduxjs/toolkit';
import type {ButtonsModeType, DisplayModePropsType} from '../common/types.ts';

export const IncrementAC = createAction('universalCounter/increment');
export const ResetAC = createAction('universalCounter/reset');
export const SetModeAC = createAction<{
  displayMode: DisplayModePropsType,
  buttonsMode: ButtonsModeType,
}>('universalCounter/setMode');
export const SetMinAC = createAction<{ minValue: number }>('universalCounter/setMin');
export const SetMaxAC = createAction<{ maxValue: number }>('universalCounter/setMax');

export const universalCounterReducer = createReducer(universalCounterInitialState, (builder) => {
  builder
    .addCase(IncrementAC, state => {
      state.count += 1;
    })
    .addCase(ResetAC, state => {
      state.count = state.minValue
    })
    .addCase(SetModeAC, (state, action) => {
      state.displayMode = action.payload.displayMode;
      state.buttonsMode = action.payload.buttonsMode;
    })
    .addCase(SetMinAC, (state, action) => {
      state.minValue = action.payload.minValue;
      state.count = action.payload.minValue // т.к. здесь Immer, то он делает черновик - state, если напишу = state.minValue, то count получает новое значение и создается новый immutable state
      state.minError = state.minValue < 0 || state.minValue >= state.maxValue
      state.maxError = state.maxValue < 0 || state.maxValue <= state.minValue
    })
    .addCase(SetMaxAC, (state, action) => {
      state.maxValue = action.payload.maxValue;
      state.minError = state.minValue < 0 || state.minValue >= state.maxValue
      state.maxError = state.maxValue < 0 || state.maxValue <= state.minValue

    })
})

//обычный reducer
/*export const IncrementAC2 = () => {
  return {type: 'INCREMENT'} as const
}


export const ResetAC2 = () => {
  return {type: 'RESET'} as const
}


export const SetModeAC2 = (displayMode: DisplayModePropsType) => {
  return {type: 'SET_MODE', payload: displayMode} as const
}


export const SetMinAC2 = (min: number) => {
  return {type: 'SET_MIN', payload: min} as const
}


export const SetMaxAC2 = (max: number) => {
  return {type: 'SET_MAX', payload: max} as const
}

type IncrementAction = ReturnType<typeof IncrementAC>
type ResetAction = ReturnType<typeof ResetAC>
type SetModeAction = ReturnType<typeof SetModeAC>
type SetMinAction = ReturnType<typeof SetMinAC>
type SetMaxAction = ReturnType<typeof SetMaxAC>

type Actions =
  IncrementAction
  | ResetAction
  | SetModeAction
  | SetMinAction
  | SetMaxAction

export const counterReducer2 = (state: UniversalCounterType = universalCounterInitialState, action: Actions): UniversalCounterType => {
  switch (action.type) {
    case 'increment': {
      return {...state, count: state.count + 1}
    }
    case 'reset': {
      return {...state, count: state.minValue}
    }
    case 'setMode': {
      return {...state, displayMode: action.payload}
    }
    case 'setMin': {
      return {...state, minValue: action.payload}
    }
    case 'setMax': {
      return {...state, maxValue: action.payload}
    }
    default:
      return state
  }
}*/