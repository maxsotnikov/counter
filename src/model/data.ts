import type {CounterType} from './counter-reducer.ts';

//-----------------values---------------------
export const MIN_INITIAL_VALUE = 0;
export const MAX_INITIAL_VALUE = 5;


export const initialState: CounterType = {
  minValue: MIN_INITIAL_VALUE,
  maxValue: MAX_INITIAL_VALUE,
  count: MIN_INITIAL_VALUE,
  displayMode: 'counter'
}

// const counterButtons: ButtonPropsType[] = [
//   {
//     title: 'inc',
//     onClick: addCount,
//     disabled: initialState.count >= initialState.maxValue,
//   },
//   {
//     title: 'reset',
//     onClick: resetCount,
//     disabled: initialState.count === initialState.minValue,
//   },
//   {
//     title: 'set',
//     onClick: settingCount,
//     disabled: false,
//   }
// ]

