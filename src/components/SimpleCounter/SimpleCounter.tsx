import s from './SimpleCounter.module.css'
import {SetCounter} from './SetCounter/SetCounter.tsx';
import {Counter} from './Counter/Counter.tsx';
import {useEffect, useState} from 'react';
import type {DisplayModePropsType} from '../Display/Display.tsx';

export const SimpleCounter = () => {

  const [minValue, setMinValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(5)
  const [count, setCount] = useState<number>(minValue)
  const [minError, setMinError] = useState(false)
  const [maxError, setMaxError] = useState(false)
  const [isSetDisabled, setIsSetDisabled] = useState(false)

  const displayMode: DisplayModePropsType = 'settings'

  const validateCount = (min: number, max: number) => {
    setMinError(min < 0 || min >= max)
    setMaxError(max < 0 || max <= min)
  }

  const saveMaxCount = (newMaxValue: number) => {
    if (minValue !== maxValue || newMaxValue > minValue) {
      setMaxValue(newMaxValue)
    }
    setIsSetDisabled(false)
    validateCount(minValue, newMaxValue)
  }
  const saveMinCount = (newMinValue: number) => {
    if (minValue !== maxValue || newMinValue < maxValue) {
      setMinValue(newMinValue)
    }
    setIsSetDisabled(false)
    validateCount(newMinValue, maxValue)
  }

  const addCount = () => {
    const newCount = count + 1
    setCount(newCount)
  }
  const resetCount = () => {
    setCount(minValue)
  }
  const settingCount = () => {
    setCount(minValue)
    setIsSetDisabled(true)
  }

  useEffect(() => {
    const savedData = localStorage.getItem('simpleCounter');
    if (savedData) {
      const parsed = JSON.parse(savedData)
      if (typeof parsed === 'object') {
        setCount(parsed.count ?? 0) // проверка на undefined || null, а если поставить || вместо ?? то при count = 0 будет false
        setMinValue(parsed.minValue ?? 0)
        setMaxValue(parsed.maxValue ?? 5)

        validateCount(parsed.minValue ?? 0, parsed.maxValue ?? 0)
      }
    }
  }, []);
  useEffect(() => {
    const data = {
      count,
      minValue,
      maxValue,
    }
    localStorage.setItem('simpleCounter', JSON.stringify(data))
  }, [count, minValue, maxValue])

  return (
    <div className={s.simpleCounterContainer}>
      <SetCounter
        minValue={minValue}
        maxValue={maxValue}
        settingCount={settingCount}
        count={count}
        mode={displayMode}
        maxError={maxError}
        minError={minError}
        onMaxChange={saveMaxCount}
        onMinChange={saveMinCount}
        isSetDisabled={isSetDisabled}
      />
      <Counter
        minValue={minValue}
        maxValue={maxValue}
        count={count}
        addCount={addCount}
        resetCount={resetCount}
      />
    </div>
  );
};