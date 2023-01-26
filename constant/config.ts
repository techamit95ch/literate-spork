import {
	COURSES_CONTRACT_NAMES_TYPE,
	EXPLORER_URLS_TYPE,
	NETWORK_ENV_TYPE,
	NODE_URLS_TYPE,
	WALLET_URLS_TYPE,
} from '@/types';

export const NETWORK_ENVS = ['testnet', 'mainnet', 'devnet'] as const;

export const NODE_URLS = [
	'https://rpc.testnet.near.org',
	'https://rpc.mainnet.near.org',
	'https://rpc.devnet.near.org',
] as const;

export const WALLET_URLS = [
	'https://wallet.testnet.near.org',
	'https://wallet.mainnet.near.org',
	'https://wallet.devnet.near.org',
] as const;

export const HELPER_URLS = [
	'https://helper.testnet.near.org',
	'https://helper.mainnet.near.org',
	'https://helper.devnet.near.org',
] as const;

export const EXPLORER_URLS = [
	'https://explorer.testnet.near.org',
	'https://explorer.mainnet.near.org',
	'https://explorer.devnet.near.org',
] as const;

export const COURSES_CONTRACT_NAMES = [
	'courses.techamit.testnet',
	'courses.techamit.mainnet',
	'courses.techamit.devnet',
] as const;

export const CUSTOMER_CONTRACT_NAMES = [
	'customer.techamit.testnet',
	'customer.techamit.mainnet',
	'customer.techamit.devnet',
] as const;

export const DEV_ENVIRONMENT_CONFIG = {
	networkId: NETWORK_ENVS[0] as NETWORK_ENV_TYPE,
	nodeUrl: NODE_URLS[0] as NODE_URLS_TYPE,
	contractName: COURSES_CONTRACT_NAMES[0] as COURSES_CONTRACT_NAMES_TYPE,
	walletUrl: WALLET_URLS[0] as WALLET_URLS_TYPE,
	helperUrl: HELPER_URLS[0] as EXPLORER_URLS_TYPE,
	explorerUrl: EXPLORER_URLS[0] as EXPLORER_URLS_TYPE,
} as const;
