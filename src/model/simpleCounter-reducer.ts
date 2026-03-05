import {simpleCounterInitialState} from './data.ts';
import {createReducer} from '@reduxjs/toolkit';
import {
  ApplySettingsAC,
  IncrementAC,
  ResetAC,
  SetMaxAC,
  SetMinAC
} from './actions.ts';

// export const IncrementAC = createAction('simpleCounter/increment');
// export const ResetAC = createAction('simpleCounter/reset');
// export const SetMinAC = createAction<{ minValue: number }>('simpleCounter/setMin');
// export const SetMaxAC = createAction<{ maxValue: number }>('simpleCounter/setMax');

export const simpleCounterReducer = createReducer(simpleCounterInitialState, (builder) => {
  builder
    .addCase(IncrementAC, state => {
      state.count += 1;
    })
    .addCase(ResetAC, state => {
      state.count = state.minValue
    })
    .addCase(SetMinAC, (state, action) => {
      state.minValue = action.payload.minValue;
      // state.count = action.payload.minValue // т.к. здесь Immer, то он делает черновик - state, если напишу = state.minValue, то count получает новое значение и создается новый immutable state
      state.minError = state.minValue < 0 || state.minValue >= state.maxValue
      state.maxError = state.maxValue < 0 || state.maxValue <= state.minValue

    })
    .addCase(SetMaxAC, (state, action) => {
      state.maxValue = action.payload.maxValue;
      state.minError = state.minValue < 0 || state.minValue >= state.maxValue
      state.maxError = state.maxValue < 0 || state.maxValue <= state.minValue
    })
    .addCase(ApplySettingsAC, state => {
      const normalizedMin = Math.round(state.minValue)
      const normalizedMax = Math.round(state.maxValue)

      state.minValue = normalizedMin
      state.maxValue = normalizedMax
      state.count = normalizedMin
    })
})
