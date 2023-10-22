'use client';
import style from './register.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import iconLogo from '../../../../public/4360189_2316086.jpg';
import { useState, useEffect } from 'react';
import { useDebounce } from '../../lib/Hooks/useDebounce';

const cx = classNames.bind(style);
export default function Dangky() {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const dbFullName = useDebounce(fullName, 500);
	useEffect(() => {
		if (!dbFullName) {
			return;
		}
	}, [dbFullName]);
	return (
		<div className={cx('form-register')}>
			<div className={cx('register-box')}>
				<div className={cx('register-box_left')}>
					<div className={cx('register-box_left-title')}>
						<h3>Đăng ký</h3>
					</div>
					<div className={cx('register-box_left-reg')}>
						<div className={cx('form-data')}>
							<input
								type="text"
								onChange={(e) => setFullName(e.target.value)}
								className={cx('form-data_box')}
								required="required"
							></input>
							<span>Họ tên</span>
						</div>
						<div className={cx('form-data')}>
							<input className={cx('form-data_box')} required="required"></input>
							<span>Email</span>
						</div>
						<div className={cx('form-data')}>
							<input className={cx('form-data_box')} required="required"></input>
							<span>tài khoản</span>
						</div>
						<div className={cx('form-data')}>
							<input type="password" className={cx('form-data_box')} required="required"></input>
							<span>Mật khẩu</span>
						</div>
						<div className={cx('form-data')}>
							<input type="checkbox" />
							<label> Đồng ý với điều khoản dịch vụ?</label>
						</div>
						<div className={cx('form-action')}>
							<button className={cx('form-action_btn')}>Đăng ký</button>
						</div>
					</div>
				</div>
				<div className={cx('register-box_right')}>
					<Image src={iconLogo} alt="icon" className={cx('register-box_image')} />
				</div>
			</div>
		</div>
	);
}

// export async function generateMetadata({ params, searchParams }) {
// 	return {
// 		title: 'Đăng ký tài khoản admin',
// 	};
// }
