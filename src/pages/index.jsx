import { graphql } from 'gatsby'
import React from 'react'
import Seo from '../components/Seo'
import Headline from '../components/Headline'
import BlogInfo from '../components/BlogInfo'
import PostListLayout from '../components/PostListLayout'
import SocialMedia from '../components/SocialMedia'
import { SITE_CONFIG } from '../config/constants'

const IndexPage = ({ data, location }) => {
	const { nodes } = data.allMdx
	const siteTitle = SITE_CONFIG['siteTitle']

	return (
		<>
			<Seo title={siteTitle} />
			<Headline
				text={{
					line1: "Hey, I'm a Gatsby Starter",
					line2: 'Gatsby Developer',
				}}
			/>
			<BlogInfo
				header="Welcome to my blog."
				description="A Gatsby Starter Project to easily get started with Blog theme. Written by Andreas Eracleous who lives in Cyprus building useful Gatsby things."
			/>
			<SocialMedia />
			<PostListLayout data={nodes} />
		</>
	)
}

export default IndexPage

export const query = graphql`
	query SITE_INDEX_QUERY {
		allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
			nodes {
				id
				slug
				frontmatter {
					title
					datetime: date
					date(formatString: "DD MMMM YYYY")
					featuredImage {
						childImageSharp {
							gatsbyImageData(
								width: 480
								transformOptions: { cropFocus: CENTER }
								blurredOptions: { width: 100 }
								placeholder: BLURRED
							)
						}
					}
				}
			}
		}
	}
`
