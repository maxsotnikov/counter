import type {RootState} from '@/app/store.ts';
import type {SettingType} from '@/common/types.ts';

export const selectSettings = (state: RootState): SettingType => state.settings;
