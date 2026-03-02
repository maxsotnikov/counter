import {simpleCounterInitialState} from './data.ts';
import {createAction, createReducer} from '@reduxjs/toolkit';

export const IncrementAC = createAction('simpleCounter/increment');
export const ResetAC = createAction('simpleCounter/reset');
// export const SetModeAC = createAction<{
//   displayMode: DisplayModePropsType,
//   buttonsMode: ButtonsModeType,
// }>('simpleCounter/setMode');
export const SetMinAC = createAction<{ minValue: number }>('simpleCounter/setMin');
export const SetMaxAC = createAction<{ maxValue: number }>('simpleCounter/setMax');

export const simpleCounterReducer = createReducer(simpleCounterInitialState, (builder) => {
  builder
    .addCase(IncrementAC, state => {
      state.count += 1;
    })
    .addCase(ResetAC, state => {
      state.count = state.minValue
    })
    // .addCase(SetModeAC, (state, action) => {
    //   state.displayMode = action.payload.displayMode;
    //   state.buttonsMode = action.payload.buttonsMode;
    // })
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
