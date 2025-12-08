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

  const addCount = () => {
    const newCount = count + 1
    setCount(newCount)
  }
  const resetCount = () => {
    setCount(0)
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
  }
  const saveMinCount = (newMinValue: number) => {
    setMinValue(newMinValue)
  }

  return (
    <div className={'counter-container'}>
      <Display
        count={count}
        maxCount={maxValue}
        minCount={minValue}
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