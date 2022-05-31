import React from 'react'
import UniversalLink from '../components/UniversalLink'
import { SITE_CONFIG } from '../config/constants'

const Copyright = ({ text, siteName, siteUrl }) => {
	return (
		<small className="text-md text-slate-600">
			© {new Date().getFullYear()}{' '}
			<UniversalLink to={siteUrl} className="hover:underline h-4 p-0">
				{siteName}
			</UniversalLink>
			{text}
		</small>
	)
}

const Nav = ({ items = [] }) => {
	return (
		<nav className="flex flex-wrap gap-4">
			{items.map(({ label, url }) => (
				<UniversalLink
					to={url}
					className="text-slate-600 text-base hover:underline h-7"
					key={url}
				>
					{label}
				</UniversalLink>
			))}
		</nav>
	)
}

const Footer = () => {
	const siteName = SITE_CONFIG['siteName']
	const copyright = SITE_CONFIG['copyright']
	const siteUrl = SITE_CONFIG['siteUrl']
	const navItems = SITE_CONFIG['footerNav']

	return (
		<footer className="footer mt-20 mb-5">
			<Nav items={navItems} />
			<hr className="my-1 border-slate-300" />
			<Copyright text={copyright} siteName={siteName} siteUrl={siteUrl} />
		</footer>
	)
}

export default Footer
