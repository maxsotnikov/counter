import {Display, type DisplayModePropsType} from '../../Display/Display.tsx';
import '../../Button/Button.css'
import {type ButtonPropsType} from '../../Button/Button.tsx';
import s from '../../Counter.module.css';
import {ButtonsContainer2} from '../../ButtonsContainer2/ButtonsContainer2.tsx';

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
      <ButtonsContainer2 buttons={settingsButtons} />
    </div>
  );
};