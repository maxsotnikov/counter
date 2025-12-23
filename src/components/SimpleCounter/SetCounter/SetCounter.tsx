import {Display, type DisplayModePropsType} from '../../Display/Display.tsx';
import '../../Button/Button.css'
import {type ButtonPropsType} from '../../Button/Button.tsx';
import s from '../SimpleCounter.module.css';
import {ButtonsContainer} from '../../ButtonsContainer/ButtonsContainer.tsx';

type SetCounter = {
  minValue: number
  maxValue: number
  settingCount: () => void,
  count: number
  mode: DisplayModePropsType
  maxError: boolean
  minError: boolean
  onMaxChange: (value: number) => void
  onMinChange: (value: number) => void
}

export const SetCounter = ({
                             minValue,
                             maxValue,
                             settingCount,
                             count,
                             mode,
                             maxError,
                             minError,
                             onMaxChange,
                             onMinChange
                           }: SetCounter) => {

  const settingsButtons: ButtonPropsType[] = [
    {
      title: 'set',
      onClick: settingCount,
      disabled: minValue >= maxValue || minValue < 0 || maxValue < 0,
    }
  ]

  return (
    <div className={s.counterContainer}>
      <Display
        minValue={minValue}
        maxValue={maxValue}
        count={count}
        mode={mode}
        maxError={maxError}
        minError={minError}
        onMaxChange={onMaxChange}
        onMinChange={onMinChange}
      />
      <ButtonsContainer buttons={settingsButtons} />
    </div>
  );
};