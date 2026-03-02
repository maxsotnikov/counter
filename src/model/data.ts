import type {
  SettingType,
  SimpleCounterType,
  UniversalCounterType
} from '../common/types.ts';

//-----------------values---------------------
export const MIN_INITIAL_VALUE = 0;
export const MAX_INITIAL_VALUE = 5;

export const universalCounterInitialState: UniversalCounterType = {
  displayMode: 'counter',
  buttonsMode: 'universalCounter',
  count: MIN_INITIAL_VALUE,
  minValue: MIN_INITIAL_VALUE,
  maxValue: MAX_INITIAL_VALUE,
  minError: false,
  maxError: false,
}

export const simpleCounterInitialState: SimpleCounterType = {
  // displayMode: 'counter',
  // buttonsMode: 'universalCounter',
  count: MIN_INITIAL_VALUE,
  minValue: MIN_INITIAL_VALUE,
  maxValue: MAX_INITIAL_VALUE,
  minError: false,
  maxError: false,
}

export const settingsInitialState: SettingType = {
  isSetDisabled: false,
}