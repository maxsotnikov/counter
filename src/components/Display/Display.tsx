import style from './Display.module.scss'

export type DisplayPropsType = {
  children?: React.ReactNode
}

export const Display = ({children}: DisplayPropsType) => {
  return (
    <div className={style.display}>
      {children}
    </div>
  );
};