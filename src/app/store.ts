import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {universalCounterReducer} from '../model/universalCounter-reducer.ts';
import {settingsReducer} from '../model/settings-reducer.ts';
import {simpleCounterReducer} from '../model/simpleCounter-reducer.ts';

// объединение reducer'ов с помощью combineReducers
const rootReducer = combineReducers({
  universalCounter: universalCounterReducer,
  simpleCounter: simpleCounterReducer,
  settings: settingsReducer
})

// создание store
export const store = configureStore({
  reducer: rootReducer,
})

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch