import './globals.css';
import _style from './globals.module.scss';
import { Inter, Roboto } from 'next/font/google';
import { ReactNode } from 'react';
import { Header } from './Component/Layouts';
import classNames from 'classnames/bind';

const cx = classNames.bind(_style);

const inter = Roboto({ subsets: ['vietnamese'], weight: '400' });

export const metadata = {
	title: 'Thu mua phế liệu',
	description: 'ở đây mua phế liệu giá cao',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div>{children}</div>
			</body>
		</html>
	);
}
