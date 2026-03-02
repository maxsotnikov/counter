import style from './Counter.module.scss';
import {Display} from '../../Display/Display.tsx';
import {ButtonsContainer} from '../../ButtonsContainer/ButtonsContainer.tsx';
import styleDisplay from '../../Display/Display.module.scss';
import type {CounterType} from '../../../common/types.ts';

export const Counter = ({
                          minValue,
                          maxValue,
                          count,
                          onAdd,
                          onReset,
                          displayMode,
                        }: CounterType) => {
  return (
    <div className={style.counterContainer}>
      <Display>
        {displayMode === 'error' && (
          <span className={styleDisplay.errorText}>incorrect value</span>
        )}

        {displayMode === 'message' && (
          <span className={styleDisplay.messageText}>enter values and press 'set'</span>
        )}

        {displayMode === 'counter' && (
          <span className={`${count === maxValue ? styleDisplay.maxCount : ''}`}>{count}</span>
        )}
      </Display>
      <ButtonsContainer
        mode={'simpleCounter'}
        count={count}
        minValue={minValue}
        maxValue={maxValue}
        onAdd={onAdd}
        onReset={onReset}
      />
    </div>
  );
};