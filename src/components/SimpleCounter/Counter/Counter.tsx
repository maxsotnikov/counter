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
}

export const Counter = ({
                          minValue,
                          maxValue,
                          count,
                          addCount,
                          resetCount,
                        }: Counter) => {

  const displayMode: DisplayModePropsType = 'counter'

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
  ]

  return (
      <div className={s.counterContainer}>
        <Display
          count={count}
          maxValue={maxValue}
          minValue={minValue}
          mode={displayMode}
        />
        <ButtonsContainer buttons={counterButtons} />
      </div>
  );
};