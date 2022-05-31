module.exports.SITE_CONFIG = {
	// Site info
	siteName: 'devBlog',
	siteTitle: `Hey, I'm a Gatsby Starter`, // Site title.
	siteTitleShort: 'GP Blog', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
	siteTitleAlt: 'Gatsby Personal Blog Template', // Alternative site title for SEO.
	siteUrl: 'https://www.yourdomain.tld', // Domain of your website without pathPrefix.
	siteDescription: 'A GatsbyJS Blog Template for blogging purpose.', // Website description used for RSS feeds/meta description tag.
	postsPerPage: 8,
	// Use for footer
	footerNav: [
		{ label: 'Sitemap', url: '/sitemap/sitemap-index.xml' },
		{ label: 'RSS', url: '/rss.xml' },
		{ label: 'Twitter', url: 'https://twitter.com/AndreasFrontDev' },
		{ label: 'LinkedIn', url: 'https://cy.linkedin.com/in/andreaseracleous' },
		{ label: 'GitHub', url: 'https://github.com/AndreasEracleous' },
	],
	social: {
		twitter: `AndreasFrontDev`, // Creates meta tags for Twitter to look your tweet richer.
	},
	authorName: `@AndreasEracleous`, // Username to display in the author segment
	copyright:
		'| All Rights Reserved | Website designed & developed by Andreas Eracleous',
	// Use for manifest
	themeColor: '#1E293B', // Used for setting manifest and progress theme colors.
	backgroundColor: '#FFF', // Used for setting manifest background color.
}
