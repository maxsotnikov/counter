import {Button} from "../Button/Button.tsx";
import '../Button/Button.css'
import type {DisplayModePropsType} from "../Display/Display.tsx";

type ButtonsContainerPropsType = {
  count: number
  minCount: number
  maxCount: number
  addCount: () => void,
  resetCount: () => void,
  settingCount: () => void,
  mode: DisplayModePropsType
}

export const ButtonsContainer = ({
                                   count,
                                   minCount,
                                   maxCount,
                                   addCount,
                                   resetCount,
                                   settingCount,
                                   mode
                                 }: ButtonsContainerPropsType) => {
  return (
    <div className={'buttons-container'}>
      {mode === 'counter' && (
        <>
          <Button
            title={'inc'}
            onClick={addCount}
            disabled={count >= maxCount}
          />
          <Button
            title={'reset'}
            onClick={resetCount}
            disabled={count === minCount}
          />
          <Button
            title={'set'}
            onClick={settingCount}
            disabled={false}
          />
        </>
      )}
      {mode === 'settings' && (
        <Button
          title={'set'}
          onClick={settingCount}
          disabled={minCount >= maxCount || minCount < 0 || maxCount < 0}
        />
      )}
    </div>
  );
};