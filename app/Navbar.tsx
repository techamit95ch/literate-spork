'use client';

import { useLayoutEffect } from 'react';
import { shallow } from 'zustand/shallow';

import { useStore } from '@/stores';
import { connectToContract, signIn } from '@/utils';

function NavBar() {
	const onHydrate = useStore((state) => state.onHydrate);
	const [account, ready] = useStore((state) => [state.account, state.isReady()], shallow);

	useLayoutEffect(() => {
		let clean = false;
		if (!ready && !clean) {
			onHydrate();
		}
		return () => {
			clean = true;
		};
	}, [onHydrate, ready]);

	return (
		<nav className="w-full flex items-center justify-between flex-wrap bg-teal-500 p-6">
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<svg
					className="fill-current h-8 w-8 mr-2"
					width="54"
					height="54"
					viewBox="0 0 54 54"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
				</svg>
				<span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
			</div>
			<div className="block lg:hidden">
				<button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
					<svg
						className="fill-current h-3 w-3"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>
			<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
				<div className="text-sm lg:flex-grow">
					<a
						href="#responsive-header"
						className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
					>
						Docs
					</a>
					<a
						href="#responsive-header"
						className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
					>
						Examples
					</a>
					{!account ? (
						<button
							className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
							onClick={() => connectToContract()}
						>
							Connect
						</button>
					) : null}
				</div>
				<div>
					<button
						type="button"
						data-mdb-ripple="true"
						data-mdb-ripple-color="light"
						data-mdb-ripple-centered="true"
						className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
						onClick={() => signIn()}
						// disabled={!!account}
					>
						{account || 'Sign In'}
					</button>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
