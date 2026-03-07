import {createReducer} from '@reduxjs/toolkit';
import {settingsInitialState} from '@/model/data.ts';
import {ApplySettingsAC, SetMaxAC, SetMinAC} from '@/model/actions.ts';

// export const ApplySettingsAC = createAction('settings/apply')

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


