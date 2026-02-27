import {useState} from 'react';
import style from './UniversalCounter.module.scss'
import {Display,} from '../Display/Display.tsx';
import {ButtonsContainer} from '../ButtonsContainer/ButtonsContainer.tsx';
import type {ButtonPropsType} from '../Button/Button.tsx';
import {
  IncrementAC,
  ResetAC,
  SetMaxAC,
  SetMinAC,
  SetModeAC
} from '../../model/counter-reducer.ts';
import {useAppSelector} from '../../common/hooks/useCounterSelector.ts';
import {useAppDispatch} from '../../common/hooks/useCounterDispatch.ts';
import {selectCounter} from '../../model/counter-selectors.ts';
import {SettingMode} from '../Display/ui/SettingMode.tsx';


export const UniversalCounter = () => {
  const state = useAppSelector(selectCounter)
  const {minValue, maxValue, count, displayMode} = state

  const dispatch = useAppDispatch();

  const [minError, setMinError] = useState(false)
  const [maxError, setMaxError] = useState(false)

  const validateCount = (min: number, max: number) => {
    setMinError(min < 0 || min >= max)
    setMaxError(max < 0 || max <= min)
  }
  const addCount = () => {
    dispatch(IncrementAC())
  }
  const resetCount = () => {
    dispatch(ResetAC())
  }
  const settingCount = () => {
    dispatch(SetModeAC({
      displayMode: displayMode === 'counter' ? 'settings' : 'counter'
    }))
  }
  const saveMaxCount = (newMaxValue: number) => {
    dispatch(SetMaxAC({maxValue: newMaxValue}))
    validateCount(minValue, newMaxValue)
  }
  const saveMinCount = (newMinValue: number) => {
    dispatch(SetMinAC({minValue: newMinValue}))
    validateCount(newMinValue, maxValue)
  }

  const counterButtons: ButtonPropsType[] = [
    {
      title: 'inc',
      onClick: addCount,
      disabled: count >= maxValue,
    },
    {
      title: 'reset',
      onClick: resetCount,
      disabled: count === minValue,
    },
    {
      title: 'set',
      onClick: settingCount,
      disabled: false,
    }
  ]

  const settingsButtons: ButtonPropsType[] = [
    {
      title: 'set',
      onClick: settingCount,
      disabled: minValue >= maxValue || minValue < 0 || maxValue < 0,
    }
  ]

  return (
    <div className={style.universalCounterContainer}>
      <Display>
        {/*{displayMode === 'error' && (
          <span className={style.errorText}>incorrect value</span>
        )}

        {displayMode === 'message' && (
          <span className={style.messageText}>enter values and press 'set'</span>
        )}*/}

        {displayMode === 'counter' && (
          <span className={`${count === maxValue ? style.maxCount : ''}`}>{count}</span>
        )}

        {displayMode === 'settings' && (
          <SettingMode
            minValue={minValue}
            maxValue={maxValue}
            saveMaxCount={saveMaxCount}
            saveMinCount={saveMinCount}
            minError={minError}
            maxError={maxError}
          />
        )}
      </Display>
      <ButtonsContainer buttons={displayMode === 'counter' ? counterButtons : settingsButtons} />
    </div>
  );
};