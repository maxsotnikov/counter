import type {RootState} from '@/app/store.ts';
import type {UniversalCounterType} from '@/common/types.ts';

export const selectUniversalCounter = (state: RootState): UniversalCounterType => state.universalCounter;
