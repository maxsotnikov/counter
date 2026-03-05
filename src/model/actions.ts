import {createAction} from '@reduxjs/toolkit';

export const IncrementAC = createAction('simpleCounter/increment');
export const ResetAC = createAction('simpleCounter/reset');
export const SetMinAC = createAction<{ minValue: number }>('simpleCounter/setMin');
export const SetMaxAC = createAction<{ maxValue: number }>('simpleCounter/setMax');
export const ApplySettingsAC = createAction('settings/apply')