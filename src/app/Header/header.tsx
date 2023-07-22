import _style from './header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(_style);
export default function Header() {
	return (
		<header className={cx('header_bar')}>
			<div className={cx('title_bar')}>
				<div className={cx('wrapper')}>
					<div className={cx('contact')}>
						<p className={cx('contact__label_text')}>Liên Hệ:</p>
						<a className={cx('contact__link-button')} href="#">
							0971.482.218
						</a>
					</div>
				</div>
			</div>
			<div className={cx('logo')}>
				<div className={cx('logo_wrapper')}>
					<div className={cx('content_logo')}>
						<div className={cx('content_logo-icon')}>
							<p>Thu mua phế liệu</p>
						</div>
						<div className={cx('content_logo-info')}></div>
					</div>
				</div>
			</div>
			<div className={cx('category')}></div>
		</header>
	);
}
