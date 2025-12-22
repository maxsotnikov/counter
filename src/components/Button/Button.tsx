import './Button.css'

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
      className={`button ${disabled ? 'button:disabled' : ''}`}
    >
      {title}
    </button>
  );
};