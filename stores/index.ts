import { create } from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import StateSlice from './slice';

import { StateSliceType } from '@/types';

export const useStore = create<StateSliceType>()(
	subscribeWithSelector(
		devtools(
			immer((...a) => ({
				...StateSlice(...a),
			}))
		)
	)
);
