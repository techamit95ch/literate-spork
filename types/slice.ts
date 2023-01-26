import { Course } from '@/type';

export type StateDataSlice = {
	_hydrate?: boolean;
	account: string;
	course: {
		name: string;
		id: string;
	};
};

export type StateActionSlice = {
	setAccount: (data: string) => void;
	setCourse: (data: StateDataSlice['course']) => void;
	onHydrate: () => void;
	fetchCourse: (id: string) => Promise<void>;
	buyCourse: (data: { course: Course }) => Promise<void>;
	isReady: () => boolean;
};

export type StateSliceType = StateDataSlice & StateActionSlice;
