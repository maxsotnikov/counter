import style from './Display.module.scss'

export type DisplayPropsType = {
  children?: React.ReactNode
}

export type DisplayModePropsType = 'settings' | 'counter' | 'error' | 'message'

export const Display = ({children}: DisplayPropsType) => {
  return (
    <div className={style.display}>
      {children}
    </div>
  );
};