import style from './UniversalCounter.module.scss'
import styleDisplay from '../Display/Display.module.scss'
import {Display} from '../Display/Display.tsx';
import {ButtonsContainer} from '../ButtonsContainer/ButtonsContainer.tsx';
import {
  IncrementAC,
  ResetAC,
  SetMaxAC,
  SetMinAC,
  SetModeAC
} from '@/model/reducers/universalCounter-reducer.ts';
import {useAppSelector} from '@/common/hooks/useCounterSelector.ts';
import {useAppDispatch} from '@/common/hooks/useCounterDispatch.ts';
import {selectUniversalCounter} from '@/model/selectors/universalCounter-selectors.ts';
import {SettingMode} from '../Display/ui/SettingMode.tsx';

export const UniversalCounter = () => {
  const state = useAppSelector(selectUniversalCounter)
  const {
    displayMode,
    buttonsMode,
    count,
    minValue,
    maxValue,
    minError,
    maxError,
  } = state

  const dispatch = useAppDispatch();

  const addCount = () => {
    dispatch(IncrementAC())
  }
  const resetCount = () => {
    dispatch(ResetAC())
  }
  const settingCount = () => {
    if (displayMode === 'counter') {
      dispatch(SetModeAC({
          displayMode: 'settings',
          buttonsMode: 'settings'
        }))
    } else {
      dispatch(SetModeAC({
        displayMode: 'counter',
        buttonsMode: 'universalCounter'
      }))
    }
  }
  const saveMaxCount = (newMaxValue: number) => {
    dispatch(SetMaxAC({maxValue: newMaxValue}))
  }
  const saveMinCount = (newMinValue: number) => {
    dispatch(SetMinAC({minValue: newMinValue}))
  }

  return (
    <div className={style.universalCounterContainer}>
      <Display>
        {displayMode === 'counter' && (
          <span className={`${count === maxValue ? styleDisplay.maxCount : ''}`}>{count}</span>
        )}

        {displayMode === 'settings' && (
          <SettingMode
            minValue={minValue}
            maxValue={maxValue}
            saveMaxCount={saveMaxCount}
            saveMinCount={saveMinCount}
            minError={minError}
            maxError={maxError}
          />
        )}
      </Display>
      <ButtonsContainer
        mode={buttonsMode}
        count={count}
        minValue={minValue}
        maxValue={maxValue}
        onAdd={addCount}
        onReset={resetCount}
        onSet={settingCount}
      />
    </div>
  );
};