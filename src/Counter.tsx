import {useState} from "react";
import './App.css'
import {Display} from "./components/Display.tsx";
import {ButtonsContainer} from "./components/buttons/ButtonsContainer.tsx";

export const Counter = () => {
  const MAX_COUNT = 5
  const MIN_COUNT = 0

  const [count, setCount] = useState<number>(MIN_COUNT)

  const addCount = () => {
    const newCount = count + 1
    setCount(newCount)
  }
  const resetCount = () => {
    setCount(0)
  }

  return (
    <div className={'counter-container'}>
      <Display
        count={count}
        maxCount={MAX_COUNT}
      ></Display>
      <ButtonsContainer
        count={count}
        minCount={MIN_COUNT}
        maxCount={MAX_COUNT}
        addCount={addCount}
        resetCount={resetCount}
      />
    </div>
  );
};