import {combineReducers, configureStore} from '@reduxjs/toolkit'

import {settingsReducer} from '@/model/reducers/settings-reducer.ts';
import {simpleCounterReducer} from '@/model/reducers/simpleCounter-reducer.ts';
import {
  universalCounterReducer
} from '@/model/reducers/universalCounter-reducer.ts';

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