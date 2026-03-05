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
                           maxError,
                           minError,
                           saveMaxCount,
                           saveMinCount,
                         }: SetCounter) => {
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