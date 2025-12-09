import {useState} from "react";
import './Counter.css'
import {
  Display,
  type DisplayModePropsType,
} from "../Display/Display.tsx";
import {ButtonsContainer} from "../Button/ButtonsContainer.tsx";

export const Counter = () => {

  const [minValue, setMinValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(5)
  const [count, setCount] = useState<number>(minValue)
  const [displayMode, setDisplayMode] = useState<DisplayModePropsType>('counter')
  const [minError, setMinError] = useState(false)
  const [maxError, setMaxError] = useState(false)

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
    setMaxValue(newMaxValue)
    validateCount(minValue, newMaxValue)
  }
  const saveMinCount = (newMinValue: number) => {
    setMinValue(newMinValue)
    validateCount(newMinValue, maxValue)
  }

  const validateCount = (min: number, max: number) => {
    setMinError(min < 0 || min >= max)
    setMaxError(max < 0 || max <= min)
  }

  return (
    <div className={'counter-container'}>
      <Display
        count={count}
        maxCount={maxValue}
        minCount={minValue}
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