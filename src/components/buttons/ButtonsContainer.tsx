import {Button} from "./Button.tsx";

type ButtonsContainerPropsType = {
  count: number
  minCount: number
  maxCount: number
  addCount: () => void,
  resetCount: () => void,
}

export const ButtonsContainer = ({
                                   count,
                                   minCount,
                                   maxCount,
                                   addCount,
                                   resetCount
                                 }: ButtonsContainerPropsType) => {
  return (
    <div className={'buttons-container'}>
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
    </div>
  );
};