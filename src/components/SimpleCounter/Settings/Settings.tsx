import {Display} from '../../Display/Display.tsx';
import '../../Button/Button.module.scss'
import style from './Settings.module.scss';
import {ButtonsContainer} from '../../ButtonsContainer/ButtonsContainer.tsx';
import {SettingMode} from '../../Display/ui/SettingMode.tsx';
import type {SetCounter} from '../../../common/types.ts';


export const Settings = ({
                                 minValue,
                                 maxValue,
                                 settingCount,
                                 // count,
                                 // displayMode,
                                 maxError,
                                 minError,
                                 saveMaxCount,
                                 saveMinCount,

                               }: SetCounter) => {

  // const settingsButtons: ButtonPropsType[] = [
  //   {
  //     title: 'set',
  //     onClick: settingCount,
  //     disabled: isSetDisabled || minValue >= maxValue || minValue < 0 || maxValue < 0,
  //   }
  // ]

  return (
    <div className={style.settingsContainer}>
      <Display>
          <SettingMode
            minValue={minValue}
            maxValue={maxValue}
            saveMaxCount={saveMaxCount}
            saveMinCount={saveMinCount}
            minError={minError}
            maxError={maxError}
          />
      </Display>
      <ButtonsContainer
        mode={'settings'}
        minValue={minValue}
        maxValue={maxValue}
        onSet={settingCount}
      />
    </div>
  );
};