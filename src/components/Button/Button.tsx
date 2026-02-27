import style from './Button.module.scss'

export type ButtonPropsType = {
  title: string,
  onClick: () => void,
  disabled: boolean,
}

export const Button = ({title, onClick, disabled}: ButtonPropsType) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${style.button} ${disabled ? style.disabled : ''}`}
    >
      {title}
    </button>
  );
};