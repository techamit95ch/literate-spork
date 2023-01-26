import { connect, Contract, keyStores, WalletConnection } from 'near-api-js';

import { getcEnvConfig } from './config';

const environment = getcEnvConfig('testnet');

export async function connectToContract() {
	try {
		const keyStore =
			typeof window === 'undefined'
				? new keyStores.InMemoryKeyStore()
				: new keyStores.BrowserLocalStorageKeyStore();

		const nearObject = { keyStore, ...environment };
		const near = await connect(
			Object.assign(
				{
					deps: {
						keyStore,
					},
				},
				nearObject
			)
		);
		const walletConnection = new WalletConnection(near, '');
		window.walletConnection = walletConnection;
		window.accountId = walletConnection.getAccountId();
		window.contract = new Contract(
			window.walletConnection.account(),
			environment.contractName,
			{
				viewMethods: ['getCourse', 'getCourses'],
				changeMethods: ['addCourse', 'purchaseCourse'],
			}
		);
	} catch (error) {
		console.error(error);
	}
}

export function signIn(): void {
	try {
		// @ts-ignore
		window.walletConnection.requestSignIn(environment.contractName);
		// window.walletConnection.requestSignIn({
		// 	contractId: environment.contractName,
		// 	methodNames: ['Example App'], // optional title
		// 	successUrl: 'http://YOUR-URL.com/success', // optional redirect URL on success
		// 	failureUrl: 'http://YOUR-URL.com/failure',
		// });
	} catch (error) {
		alert(error);
	}
}

export function signOut(): void {
	try {
		window.walletConnection.signOut();
		window.location.reload();
	} catch (error) {
		alert(error);
	}
}

export default connectToContract;
