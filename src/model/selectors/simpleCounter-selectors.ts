import type {RootState} from '@/app/store.ts';
import type {SimpleCounterType} from '@/common/types.ts';

export const selectSimpleCounter = (state: RootState): SimpleCounterType => state.simpleCounter;
