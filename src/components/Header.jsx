import React from 'react'
import { Link } from 'gatsby'
import { SITE_CONFIG } from '../config/constants'

const Header = () => {
	const siteName = SITE_CONFIG['siteName']

	return (
		<header className="flex py-9">
			<Link className="text-xl tracking-wide" to="/">
				<span className="text-black font-semibold">{siteName}</span>
			</Link>
		</header>
	)
}

export default Header
