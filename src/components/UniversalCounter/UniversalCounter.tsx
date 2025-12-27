import {useEffect, useState} from 'react';
import s from './UniversalCounter.module.css'
import {
  Display,
  type DisplayModePropsType,
} from '../Display/Display.tsx';
import {ButtonsContainer} from '../ButtonsContainer/ButtonsContainer.tsx';
import type {ButtonPropsType} from '../Button/Button.tsx';

export const UniversalCounter = () => {

  const [minValue, setMinValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(5)
  const [count, setCount] = useState<number>(minValue)
  const [displayMode, setDisplayMode] = useState<DisplayModePropsType>('counter')
  const [minError, setMinError] = useState(false)
  const [maxError, setMaxError] = useState(false)

  const validateCount = (min: number, max: number) => {
    setMinError(min < 0 || min >= max)
    setMaxError(max < 0 || max <= min)
  }
  const addCount = () => {
    const newCount = count + 1
    setCount(newCount)
  }
  const resetCount = () => {
    setCount(minValue)
  }
  const settingCount = () => {
    if (displayMode === 'counter') {
      setDisplayMode('settings')
    } else {
      setCount(minValue)
      setDisplayMode('counter')
    }
  }
  const saveMaxCount = (newMaxValue: number) => {
    if (minValue !== maxValue || newMaxValue > minValue) {
      setMaxValue(newMaxValue)
    }
    validateCount(minValue, newMaxValue)
  }
  const saveMinCount = (newMinValue: number) => {
    if (minValue !== maxValue || newMinValue < maxValue) {
      setMinValue(newMinValue)
    }
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

  useEffect(() => {
    const savedData = localStorage.getItem('universalCounter');
    if (savedData) {
      const parsed = JSON.parse(savedData)
      if (parsed) {
        setCount(parsed.count ?? 0) // проверка на undefined || null, а если поставить || вместо ?? то при count = 0 будет false
        setMinValue(parsed.minValue ?? 0)
        setMaxValue(parsed.maxValue ?? 5)

        validateCount(parsed.minValue ?? 0, parsed.maxValue ?? 0) //убрать валидацию
      }
    }
  }, []);
  useEffect(() => {
    const data = {
      count,
      minValue,
      maxValue,
    }
    localStorage.setItem('universalCounter', JSON.stringify(data))
  }, [count, minValue, maxValue])

  return (
    <div className={s.universalCounterContainer}>
      <Display
        count={count}
        maxValue={maxValue}
        minValue={minValue}
        maxError={maxError}
        minError={minError}
        mode={displayMode}
        onMaxChange={saveMaxCount}
        onMinChange={saveMinCount}
      ></Display>
      <ButtonsContainer buttons={displayMode === 'counter' ? counterButtons : settingsButtons} />
    </div>
  );
};