import { DEV_ENVIRONMENT_CONFIG } from '@/constant';
import { CONFIG_ENV_TYPE, NETWORK_ENV_TYPE } from '@/types';

export function getcEnvConfig(env: NETWORK_ENV_TYPE): CONFIG_ENV_TYPE {
	if (env !== 'testnet') {
		throw new Error('Unknow environment');
	}
	return DEV_ENVIRONMENT_CONFIG;
}
