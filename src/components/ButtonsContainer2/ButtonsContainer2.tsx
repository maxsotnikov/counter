import {Button, type ButtonPropsType} from '../Button/Button.tsx';
import '../Button/Button.css'

type ButtonsContainerPropsType = {
  buttons: ButtonPropsType[]
}

export const ButtonsContainer2 = ({buttons}: ButtonsContainerPropsType) => {
  return (
    <div className={'buttons-container'}>
      {buttons.map((button, index) => (
        <Button
          key={index}
          title={button.title}
          onClick={button.onClick}
          disabled={button.disabled}
        />
      ))}
    </div>
  );
};