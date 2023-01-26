import { StateCreator } from 'zustand';

import { StateDataSlice, StateSliceType } from '@/types';
import { connectToContract, fetchNearCourse, purchaseNearCourse } from '@/utils';

export const initialState: StateDataSlice = {
	_hydrate: false,
	account: '',
	course: {
		id: '',
		name: '',
	},
};

const StateSlice: StateCreator<StateSliceType, [['zustand/immer', unknown]], [], StateSliceType> = (
	set,
	get
) => ({
	...initialState,
	onHydrate() {
		connectToContract()
			.then(() => {
				if (window?.walletConnection?.account().accountId) {
					get().setAccount(window?.walletConnection?.account().accountId);
				}
			})
			.catch((err) => {
				throw new Error(err.message);
			})
			.finally(() => {
				set(() => {
					return {
						_hydrate: true,
					};
				});
			});
	},
	setAccount(account) {
		set(() => {
			return { account };
		});
	},
	setCourse(course) {
		set(() => {
			return { course };
		});
	},
	isReady() {
		return get()._hydrate!;
	},
	async fetchCourse(id) {
		if (get().account) {
			const name = (await fetchNearCourse(id)) ?? '';
			get().setCourse({ name, id });
		}
	},
	async buyCourse({ course }) {
		if (get().account) {
			const GAS = 100000000000000;
			await purchaseNearCourse({ course, GAS, price: +course.price });
		}
	},
});

export default StateSlice;
