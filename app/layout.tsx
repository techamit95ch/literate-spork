'use client';
import './globals.scss';

import { QueryClient, QueryClientProvider } from 'react-query';

import Navbar from './Navbar';
import styles from './page.module.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const queryClient = new QueryClient();
	return (
		<html lang="en">
			<head />
			<body>
				<QueryClientProvider client={queryClient}>
					<header>
						<Navbar />
					</header>
					<main className={styles.main}>{children}</main>
				</QueryClientProvider>
			</body>
		</html>
	);
}
