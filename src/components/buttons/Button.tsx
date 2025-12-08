type ButtonPropsType = {
  title: string,
  onClick: () => void,
  disabled: boolean,
}

export const Button = ({title, onClick, disabled}: ButtonPropsType) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`button-active ${disabled ? 'button-disabled' : ''}`}
    >
      {title}
    </button>
  );
};