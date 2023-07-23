import './globals.css';
import _style from './globals.module.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Header from './Header/header';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'], weight: '500' });

export const metadata: Metadata = {
	title: 'Thu mua phế liệu',
	description: 'ở đây mua phế liệu giá cao',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<div className={_style.main}>{children}</div>
				<footer></footer>
			</body>
		</html>
	);
}
