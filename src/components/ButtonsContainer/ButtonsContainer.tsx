import {Button, type ButtonPropsType} from '../Button/Button.tsx';
import style from './ButtonsContainer.module.scss'
import type {ButtonsContainerType} from '@/common/types.ts';

export const ButtonsContainer = (props: ButtonsContainerType) => {
  let buttons: ButtonPropsType[] = []

  if (props.mode === 'universalCounter') {
    buttons = [
      {
        title: 'inc',
        onClick: props.onAdd,
        disabled: props.count >=  props.maxValue,
      },
      {
        title: 'reset',
        onClick:  props.onReset,
        disabled:  props.count ===  props.minValue,
      },
      {
        title: 'set',
        onClick:  props.onSet !,
        disabled: false,
      }
    ]
  }

  if (props.mode === 'simpleCounter') {
    buttons = [
      {
        title: 'inc',
        onClick: props.onAdd,
        disabled: props.count >=  props.maxValue,
      },
      {
        title: 'reset',
        onClick:  props.onReset,
        disabled:  props.count ===  props.minValue,
      },
    ]
  }

  if (props.mode === 'settings') {
    buttons = [
      {
        title: 'set',
        onClick:  props.onSet !,
        disabled:  props.minValue >=  props.maxValue ||  props.minValue < 0 ||  props.maxValue < 0,
      }
    ]
  }
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