import {useEffect, useState} from "react";
import s from '../Counter.module.css'
import {
  Display,
  type DisplayModePropsType,
} from "../Display/Display.tsx";
import {ButtonsContainer} from "../ButtonsContainer/ButtonsContainer.tsx";

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
    if(minValue !== maxValue || newMaxValue > minValue) {
      setMaxValue(newMaxValue)
    }
    validateCount(minValue, newMaxValue)
  }
  const saveMinCount = (newMinValue: number) => {
    if(minValue !== maxValue || newMinValue < maxValue) {
      setMinValue(newMinValue)
    }
    validateCount(newMinValue, maxValue)
  }

  useEffect(() => {
    const savedData = localStorage.getItem("universalCounter");
    if(savedData) {
      const parsed = JSON.parse(savedData)
      if(typeof parsed === 'object') {
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
    localStorage.setItem('universalCounter', JSON.stringify(data))
  }, [count, minValue, maxValue])

  return (
    <div className={s.counterContainer}>
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
      <ButtonsContainer
        count={count}
        minCount={minValue}
        maxCount={maxValue}
        addCount={addCount}
        resetCount={resetCount}
        settingCount={settingCount}
        mode={displayMode}
      />
    </div>
  );
};