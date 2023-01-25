import { Contract, WalletConnection } from 'near-api-js';

type ExtendedContract = Contract & {
	getCourse?: (data: { id: string }) => Promise<string | null>;
	getCourses?: () => Promise<Record<string, string>[]>;
	addCourse?: (data: { id: string; name: string; price: number }) => Promise<void>;
};

declare global {
	export interface Window {
		walletConnection: WalletConnection;
		contract: any;
		accountId: string;
	}
}
