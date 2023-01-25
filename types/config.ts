import {
	COURSES_CONTRACT_NAMES,
	DEV_ENVIRONMENT_CONFIG,
	EXPLORER_URLS,
	HELPER_URLS,
	NETWORK_ENVS,
	NODE_URLS,
	WALLET_URLS,
} from '@/constant';

export type CONFIG_ENV_TYPE = typeof DEV_ENVIRONMENT_CONFIG;
export type NETWORK_ENV_TYPE = (typeof NETWORK_ENVS)[number];
export type NODE_URLS_TYPE = (typeof NODE_URLS)[number];
export type COURSES_CONTRACT_NAMES_TYPE = (typeof COURSES_CONTRACT_NAMES)[number];
export type HELPER_URLS_TYPE = (typeof HELPER_URLS)[number];
export type EXPLORER_URLS_TYPE = (typeof EXPLORER_URLS)[number];
export type WALLET_URLS_TYPE = (typeof WALLET_URLS)[number];
