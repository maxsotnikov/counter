import './Dispaly.css'
import type {ChangeEvent} from 'react';

export type DisplayPropsType = {
  count: number
  maxValue: number
  minValue: number
  maxError?: boolean
  minError?: boolean
  mode: DisplayModePropsType
  onMaxChange?: (value: number) => void
  onMinChange?: (value: number) => void
}

export type DisplayModePropsType = 'settings' | 'counter' | 'error' | 'message'

export const Display = ({
                          count,
                          maxValue,
                          minValue,
                          maxError,
                          minError,
                          mode = 'counter',
                          onMinChange,
                          onMaxChange,
                        }: DisplayPropsType) => {

  const onMinChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (onMinChange) onMinChange(Number(e.currentTarget.value))

  }
  const onMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (onMaxChange) onMaxChange(Number(e.currentTarget.value))
  }

  if (mode === 'error') {
    return <div className={'display'}><span className={'error-text'}>incorrect value</span>
    </div>
  }

  if (mode === 'message') {
    return <div className={'display'}><span className={'message-text'}>enter values and press 'set'</span>
    </div>
  }

  if (mode === 'counter') {
    const counter = count === maxValue ? 'display max-count' : 'display'
    return <div className={counter}>{count}</div>
  }

  return (
    <>
      <div className={'display settings'}>
        <label>max value: <input
          type={'number'}
          value={maxValue}
          onChange={onMaxChangeHandler}
          className={maxError ? 'error' : ''}
        /></label>
        <label>min value: <input
          type={'number'}
          value={minValue}
          onChange={onMinChangeHandler}
          className={minError ? 'error' : ''}
        /></label>
      </div>
    </>

  );
};