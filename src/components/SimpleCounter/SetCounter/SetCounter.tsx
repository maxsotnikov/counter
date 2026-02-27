import {Display, type DisplayModePropsType} from '../../Display/Display.tsx';
import '../../Button/Button.module.scss'
import {type ButtonPropsType} from '../../Button/Button.tsx';
import s from '../SimpleCounter.module.scss';
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
  isSetDisabled: boolean
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
                             onMinChange,
                             isSetDisabled
                           }: SetCounter) => {

  const settingsButtons: ButtonPropsType[] = [
    {
      title: 'set',
      onClick: settingCount,
      disabled: isSetDisabled || minValue >= maxValue || minValue < 0 || maxValue < 0,
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