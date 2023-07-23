import _style from './header.module.scss';
import classNames from 'classnames/bind';
import type { Metadata } from 'next';
import Link from 'next/link';

const cx = classNames.bind(_style);
const category = [
	{
		title: 'mua phế liệu săt',
		href: '/',
	},
	{
		title: 'mua phế liệu nhôm',
		href: '/',
	},
	{
		title: 'mua phế liệu đồng',
		href: '/',
	},
	{
		title: 'mua phế liệu điện tử',
		href: '/',
	},
	{
		title: 'mua phế liệu niken',
		href: '/',
	},
	{
		title: 'mua phế liệu niken',
		href: '/',
	},
	{
		title: 'mua phế liệu niken',
		href: '/',
	},
	{
		title: 'mua phế liệu niken',
		href: '/',
	},
	{
		title: 'mua phế liệu niken',
		href: '/',
	},
];
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
							<p>
								<a href="/">Thu mua phế liệu</a>
							</p>
						</div>
						<div className={cx('content_logo-info')}>
							<ul className={cx('infosite')}>
								<li className={cx('infosite_btnActionLink')}>
									<Link href="/">Dịch vụ</Link>
								</li>
								<li className={cx('infosite_btnActionLink')}>
									<Link href="/">Giới thiệu</Link>
								</li>
								<li className={cx('infosite_btnActionLink')}>
									<Link href="/">Bảng giá</Link>
								</li>
								<li className={cx('infosite_btnActionLink')}>
									<Link href="/">Liên hệ</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className={cx('category')}>
				<ul className={cx('category_wrapper')}>
					{category.map((content, index) => (
						<li className={cx('categoryItem')} key={index}>
							<Link href={content.title.replace('/%20/g', '-')}>{content.title}</Link>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
}
