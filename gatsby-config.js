const { SITE_CONFIG } = require('./src/config/constants/index')

const siteName = SITE_CONFIG['siteName']
const siteTitle = SITE_CONFIG['siteTitle']
const siteTitleShort = SITE_CONFIG['siteTitleShort']
const siteDescription = SITE_CONFIG['siteDescription']
const authorName = SITE_CONFIG['authorName']
const social = SITE_CONFIG['social']
const siteUrl = SITE_CONFIG['siteUrl']
const themeColor = SITE_CONFIG['themeColor']
const backgroundColor = SITE_CONFIG['backgroundColor']

module.exports = {
	siteMetadata: {
		title: siteName,
		description: siteDescription,
		siteUrl,
		author: authorName,
		social,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-react-svg`,
			options: {
				rule: {
					include: `${__dirname}/src/assets/svg/`,
				},
			},
		},
		'gatsby-plugin-postcss',
		/*
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: `ADD YOUR TRACKING ID HERE`,
				head: true,
			},
		},
		*/
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `
				{
				  site {
					siteMetadata {
					title
					description
					siteUrl
					site_url: siteUrl
					}
				  }
				}
			  `,
				feeds: [
					{
						serialize: ({ query: { site, allMdx } }) => {
							return allMdx.nodes.map(node => {
								return Object.assign(
									{},
									node.frontmatter.title,
									node.frontmatter.date,
									{
										description: node.excerpt,
										date: node.frontmatter.date,
										url: site.siteMetadata.siteUrl + '/' + node.slug,
										guid: site.siteMetadata.siteUrl + '/' + node.slug,
										custom_elements: [{ 'content:encoded': node.content }],
									},
								)
							})
						},
						query: `
					{
						allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
							nodes {
								slug
								body
								excerpt
								frontmatter {
									title
									date
								}
							}
						}
					}
				  `,
						output: '/rss.xml',
						title: "Your Site's RSS Feed",
					},
				],
			},
		},
		'gatsby-plugin-sitemap',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: siteTitle,
				short_name: siteTitleShort,
				start_url: `/`,
				background_color: backgroundColor,
				theme_color: themeColor,
				display: `minimal-ui`,
				icon: `${__dirname}/src/assets/images/icon.png`,
			},
		},
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				extensions: [`.mdx`, `.md`],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							inlineCodeMarker: null,
							aliases: {},
							showLineNumbers: true,
							noInlineHighlight: false,
						},
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 640,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				defaults: {
					formats: [`auto`, `webp`, `avif`],
					placeholder: `none`,
					breakpoints: [576, 768],
					quality: 80,
					backgroundColor: `transparent`,
				},
			},
		},
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/assets/images/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/content/`,
				name: `posts`,
			},
		},
		`gatsby-plugin-offline`,
	],
}
