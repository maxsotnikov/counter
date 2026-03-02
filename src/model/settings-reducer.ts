import {createAction, createReducer} from '@reduxjs/toolkit';
import {SetMaxAC, SetMinAC} from './simpleCounter-reducer.ts';
import {settingsInitialState} from './data.ts';

export const ApplySettingsAC = createAction('settings/apply')

export const settingsReducer = createReducer(settingsInitialState, (builder) => {
  builder
    .addCase(SetMinAC, state => {
      state.isSetDisabled = false
    })
    .addCase(SetMaxAC, state => {
      state.isSetDisabled = false
    })
    .addCase(ApplySettingsAC, state => {
      state.isSetDisabled = true
    })
})


