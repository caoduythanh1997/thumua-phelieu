import style from './login.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';
import Image from 'next/image';
import iConGoogle from '../../../../public/icons8-google.png';
import iConGithub from '../../../../public/icons8-github-50.png';
import iConFacebook from '../../../../public/icons8-facebook-48.png';
import { ImageResponse } from 'next/server';
import connectMongoDB from '../../lib/server/mongoDb';
import * as httpRequest from '../../lib/server/HttpRequest';
import { checkIsOnDemandRevalidate } from 'next/dist/server/api-utils';

const cx = classNames.bind(style);

export default function Loginadmin(params) {
	const LoginAccount = async (e) => {
		const body = {
			user_name: 'admin',
			password: 'admin123',
		};
		httpRequest
			.RequestPost('http://api.muaphelieu.local/api/login', body)
			.then((val) => {
				const { code, message } = val;
				if (code == 304) {
				}
			})
			.catch((error) => {
				console.log('Error =>' + error);
			});
	};
	return (
		<div className={cx('login')}>
			<div className={cx('login-form')}>
				<div className={cx('login-form_title')}>
					<h3>Đăng nhập vào trang quản trị</h3>
				</div>
				<div className={cx('login-form_content')}>
					<div className={cx('formUser')}>
						<div className={cx('formUser-title')}>
							<p>Tài Khoản</p>
						</div>
						<div className={cx('formUser-input')}>
							<input type="text" placeholder="Tài khoản..." />
						</div>
					</div>
					<div className={cx('formPassword')}>
						<div className={cx('formPassword-title')}>
							<p>Mật Khẩu</p>
						</div>
						<div className={cx('formPassword-input')}>
							<input type="password" placeholder="Mật khẩu..." />
						</div>
					</div>
					<div className={cx('formLogin')}>
						<div className={cx('formLogin-ForgotPass')}>
							<Link href="/admin/login/forgotpass">
								<p>Quên mật khẩu?</p>
							</Link>
						</div>
						<div className={cx('formLogin-Button')}>
							<button className={cx('formLogin-Button_login')}>
								<p>Đăng Nhập</p>
							</button>
						</div>
					</div>
				</div>
				<div className={cx('login-form_end')}>
					<div className={cx('formRegister')}>
						<div className={cx('formRegister-button')}>
							<Link href="/admin/dang-ky">
								<p>Tạo tài khoản</p>
							</Link>
						</div>
					</div>
					<div className={cx('formContact')}>
						<div className={cx('formContact-box')}>
							<div className={cx('formContact-box_icon')}>
								<Image src={iConGoogle} alt="Google" />
							</div>
							<div className={cx('formContact-box_content')}>
								<p>Connect Google</p>
							</div>
						</div>
						<div className={cx('formContact-box')}>
							<div className={cx('formContact-box_icon')}>
								<Image src={iConGithub} alt="Github" />
							</div>
							<div className={cx('formContact-box_content')}>
								<p>Connect Github</p>
							</div>
						</div>
						<div className={cx('formContact-box')}>
							<div className={cx('formContact-box_icon')}>
								<Image src={iConFacebook} alt="Facebook" />
							</div>
							<div className={cx('formContact-box_content')}>
								<p>Connect Facebook</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export async function generateMetadata({ params, searchParams }) {
	return {
		title: 'Đăng nhập vào trang quản trị',
	};
}
