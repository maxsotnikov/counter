import style from '../../UniversalCounter/UniversalCounter.module.scss';

type SettingModeProps = {
  minValue: number;
  maxValue: number;
  saveMinCount: (value: number) => void;
  saveMaxCount: (value: number) => void;
  minError: boolean;
  maxError: boolean;
}

export const SettingMode = ({
                              minValue,
                              maxValue,
                              saveMaxCount,
                              saveMinCount,
                              minError,
                              maxError
                            }: SettingModeProps) => {
  return (
    <div className={style.settings}>
      <label>
        max value:
        <input
          type={'number'}
          value={maxValue}
          onChange={e => saveMaxCount(Number(e.currentTarget.value))}
          className={`${maxError ? style.error : ''}`}
        />
      </label>
      <label>
        min value:
        <input
          type={'number'}
          value={minValue}
          onChange={e => saveMinCount(Number(e.currentTarget.value))}
          className={`${minError ? style.error : ''}`}
        />
      </label>
    </div>
  );
};