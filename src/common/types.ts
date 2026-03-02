export type DisplayModePropsType = 'settings' | 'counter' | 'error' | 'message'

//----------------------------countersType--------------------------------------
export type UniversalCounterType = {
  displayMode: DisplayModePropsType
  buttonsMode: ButtonsModeType
  count: number;
  minValue: number;
  maxValue: number;
  minError: boolean
  maxError: boolean
}

export type SimpleCounterType = {
  // displayMode: DisplayModePropsType
  count: number
  minValue: number
  maxValue: number
  minError: boolean
  maxError: boolean
  // onAdd: () => void,
  // onReset: () => void,
}

//----------------------------buttonsType---------------------------------------
export  type ButtonsContainerType = UniversalCounterButtonsModeType | SettingsButtonsModeType | SimpleCounterButtonsModeType

export type ButtonsModeType = 'universalCounter' | 'settings'

export type UniversalCounterButtonsModeType = {
  mode: 'universalCounter'
  count: number
  minValue: number
  maxValue: number
  onAdd: () => void
  onReset: () => void
  onSet?: () => void
}

export type SimpleCounterButtonsModeType = {
  mode: 'simpleCounter'
  count: number
  minValue: number
  maxValue: number
  onAdd: () => void
  onReset: () => void
}

export type SettingsButtonsModeType = {
  mode: 'settings'
  minValue: number
  maxValue: number
  onSet: () => void
}

//----------------------------------------
export type SetCounter = {
  minValue: number
  maxValue: number
  settingCount: () => void,
  maxError: boolean
  minError: boolean
  saveMinCount: (value: number) => void
  saveMaxCount: (value: number) => void
  // isSetDisabled: boolean
}

export type CounterType = {
  displayMode: DisplayModePropsType,
  minValue: number,
  maxValue: number,
  count: number,
  onAdd: () => void
  onReset: () => void
}

export type SettingType = {
  isSetDisabled: boolean;
}