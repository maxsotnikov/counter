import s from './SimpleCounter.module.scss'
import {Settings} from './Settings/Settings.tsx';
import {Counter} from './Counter/Counter.tsx';
import type {DisplayModePropsType} from '../../common/types.ts';
import {useAppSelector} from '../../common/hooks/useCounterSelector.ts';
import {useAppDispatch} from '../../common/hooks/useCounterDispatch.ts';
import {
  IncrementAC,
  ResetAC,
  SetMaxAC,
  SetMinAC
} from '../../model/simpleCounter-reducer.ts';
import {ApplySettingsAC} from '../../model/settings-reducer.ts';
import {selectSettings} from '../../model/settings-selector.ts';
import {selectSimpleCounter} from '../../model/simpleCounter-selectors.ts';


export const SimpleCounter = () => {
  const state = useAppSelector(selectSimpleCounter)
  const {
    minValue,
    maxValue,
    count,
    minError,
    maxError,

  } = state

  const {isSetDisabled} = useAppSelector(selectSettings)

  const dispatch = useAppDispatch();

  const addCount = () => {
    dispatch(IncrementAC())
  }
  const resetCount = () => {
    dispatch(ResetAC())
  }
  const settingCount = () => {
    dispatch(ApplySettingsAC())
    // if (displayMode === 'universalCounter') {
    //   dispatch(SetModeAC({
    //     displayMode: 'settings',
    //     buttonsMode: 'settings'
    //   }))
    // } else {
    //   dispatch(SetModeAC({
    //     displayMode: 'universalCounter',
    //     buttonsMode: 'universalCounter'
    //   }))
    // }
  }
  const saveMaxCount = (newMaxValue: number) => {
    dispatch(SetMaxAC({maxValue: newMaxValue}))
  }
  const saveMinCount = (newMinValue: number) => {
    dispatch(SetMinAC({minValue: newMinValue}))
  }

  // const normalizeValue = (value: number) => {
  //   return Math.round(value)
  // }

  const counterMode: DisplayModePropsType =
    minError || maxError
      ? 'error'
      : !isSetDisabled
        ? 'message'
        : 'counter'

  return (
    <div className={s.simpleCounterContainer}>
      <Settings
        minValue={minValue}
        maxValue={maxValue}
        settingCount={settingCount}
        // count={count}
        // displayMode={displayMode}
        maxError={maxError}
        minError={minError}
        saveMaxCount={saveMaxCount}
        saveMinCount={saveMinCount}
        // isSetDisabled={isSetDisabled}
      />
      <Counter
        minValue={minValue}
        maxValue={maxValue}
        count={count}
        onAdd={addCount}
        onReset={resetCount}
        displayMode={counterMode}
      />
    </div>
  );
};