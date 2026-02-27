import type {DisplayModePropsType} from '../components/Display/Display.tsx';
import {initialState} from './data.ts';
import {createAction, createReducer} from '@reduxjs/toolkit';

export type CounterType = {
  minValue: number;
  maxValue: number;
  count: number;
  displayMode: DisplayModePropsType
}

export const IncrementAC = createAction('counter/increment');
export const ResetAC = createAction('counter/reset');
export const SetModeAC = createAction<{
  displayMode: DisplayModePropsType
}>('counter/setMode');
export const SetMinAC = createAction<{ minValue: number }>('counter/setMin');
export const SetMaxAC = createAction<{ maxValue: number }>('counter/setMax');

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(IncrementAC, state => {
      state.count += 1;
    })
    .addCase(ResetAC, state => {
      state.count = state.minValue
    })
    .addCase(SetModeAC, (state, action) => {
      state.displayMode = action.payload.displayMode;
    })
    .addCase(SetMinAC, (state, action) => {
      state.minValue = action.payload.minValue;
      state.count = action.payload.minValue // т.к. здесь Immer, то он делает черновик - state, если напишу = state.minValue, то count получает новое значение и создается новый immutable state
    })
    .addCase(SetMaxAC, (state, action) => {
      state.maxValue = action.payload.maxValue;
    })
})

/*export const IncrementAC2 = () => {
  return {type: 'INCREMENT'} as const
}


export const ResetAC2 = () => {
  return {type: 'RESET'} as const
}


export const SetModeAC2 = (mode: DisplayModePropsType) => {
  return {type: 'SET_MODE', payload: mode} as const
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

export const counterReducer2 = (state: CounterType = initialState, action: Actions): CounterType => {
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
}*/ //обычный reducer


