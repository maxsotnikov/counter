import './Dispaly.css'
import type {ChangeEvent} from 'react';

export type DisplayPropsType = {
  count: number
  maxCount: number
  minCount: number
  maxError: boolean
  minError: boolean
  mode: DisplayModePropsType
  onMaxChange: (value: number) => void
  onMinChange: (value: number) => void
}

export type DisplayModePropsType = 'settings' | 'counter'

export const Display = ({
                          count,
                          maxCount,
                          minCount,
                          maxError,
                          minError,
                          mode,
                          onMinChange,
                          onMaxChange,
                        }: DisplayPropsType) => {

  const counter = count === maxCount ? 'display max-count' : 'display'
  const display = mode === 'counter' ? counter : 'display settings'

  const onMinChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onMinChange(Number(e.currentTarget.value))
  }
  const onMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onMaxChange(Number(e.currentTarget.value))
  }

  return (
    <>
      {mode === 'counter' ? <div className={display}>{count}</div> : (
        <div className={'display settings'}>
          <label>max value: <input
            type={'number'}
            value={maxCount}
            onChange={onMaxChangeHandler}
            className={maxError ? 'error' : ''}
          /></label>
          <label>min value: <input
            type={'number'}
            value={minCount}
            onChange={onMinChangeHandler}
            className={minError ? 'error' : ''}
          /></label>
        </div>)}
    </>
  );
};