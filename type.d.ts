import { Contract, WalletConnection } from 'near-api-js';

type Course = {
	id: string;
	name: string;
	price: number;
	owner?: string;
	image: string;
};

type BUY = {
	course: Course;
	GAS: number;
	price: number;
};

type ExtendedContract = Contract & {
	getCourse?: (data: { id: string }) => Promise<string | null>;
	getCourses?: () => Promise<Course[]>;
	addCourse?: (data: { course: Course }) => Promise<void>;
	purchaseCourse?: (data: BUY) => Promise<void>;
};

declare global {
	export interface Window {
		walletConnection: WalletConnection;
		contract: ExtendedContract;
		accountId: string;
	}
}
