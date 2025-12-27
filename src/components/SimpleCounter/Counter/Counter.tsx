import s from '../SimpleCounter.module.css';
import {Display, type DisplayModePropsType} from '../../Display/Display.tsx';
import {ButtonsContainer} from '../../ButtonsContainer/ButtonsContainer.tsx';
import type {ButtonPropsType} from '../../Button/Button.tsx';

type Counter = {
  minValue: number
  maxValue: number
  count: number
  addCount: () => void,
  resetCount: () => void,
  mode: DisplayModePropsType
}

export const Counter = ({
                          minValue,
                          maxValue,
                          count,
                          addCount,
                          resetCount,
                          mode,
                        }: Counter) => {

  const counterButtons: ButtonPropsType[] = [
    {
      title: 'inc',
      onClick: addCount,
      disabled: count >= maxValue || mode === 'message' || mode === 'error',
    },
    {
      title: 'reset',
      onClick: resetCount,
      disabled: count === minValue || mode === 'message' || mode === 'error',
    },
  ]

  return (
    <div className={s.counterContainer}>
      <Display
        count={count}
        maxValue={maxValue}
        minValue={minValue}
        mode={mode}
      />
      <ButtonsContainer buttons={counterButtons} />
    </div>
  );
};