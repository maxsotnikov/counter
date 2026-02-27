import {Button, type ButtonPropsType} from '../Button/Button.tsx';
import style from './ButtonsContainer.module.scss'

type ButtonsContainerPropsType = {
  buttons: ButtonPropsType[]
}

export const ButtonsContainer = ({buttons}: ButtonsContainerPropsType) => {
  return (
    <div className={style.buttonsContainer}>
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