import { Contract, WalletConnection } from 'near-api-js';

export type BasicWindowType = {
	walletConnection: WalletConnection;
	contract: Contract;
	accountId: string;
};
