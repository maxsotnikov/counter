import './Dispaly.css'

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
  return (
    <>
      {mode === 'counter' ? <div className={display}>{count}</div> : (
        <div className={'display settings'}>
          <label>max value: <input
            type={'number'}
            value={maxCount}
            onChange={(e) => onMaxChange(Number(e.currentTarget.value))}
            className={maxError ? 'error' : ''}
          /></label>
          <label>min value: <input
            type={'number'}
            value={minCount}
            onChange={(e) => onMinChange(Number(e.currentTarget.value))}
            className={minError ? 'error' : ''}
          /></label>
        </div>)}
    </>
  );
};