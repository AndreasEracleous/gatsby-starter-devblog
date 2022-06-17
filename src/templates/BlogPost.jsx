import { graphql } from 'gatsby'
import React from 'react'
import Seo from '../components/Seo'
import PostLayout from '../components/PostLayout'

const BlogPost = ({ data, pageContext }) => {
	const {
		id,
		body,
		excerpt,
		frontmatter: { featuredImage, title, date, datetime },
	} = data.mdx

	return (
		<>
			<Seo title={title} description={excerpt} />
			<hr className="border-gray-200 mb-8" />
			<PostLayout
				featuredImage={featuredImage}
				title={title}
				content={body}
				date={date}
				datetime={datetime}
				previous={data.previous}
				next={data.next}
				key={id}
			/>
		</>
	)
}

export default BlogPost

export const query = graphql`
	query BLOG_POST_BY_SLUG(
		$id: String!
		$previousPostId: String
		$nextPostId: String
	) {
		mdx(id: { eq: $id }) {
			id
			slug
			body
			excerpt
			frontmatter {
				datetime: date
				date(formatString: "DD MMMM YYYY")
				title
				featuredImage {
					childImageSharp {
						gatsbyImageData(
							width: 500
							transformOptions: { cropFocus: CENTER }
							blurredOptions: { width: 100 }
							placeholder: BLURRED
						)
					}
				}
			}
		}
		previous: mdx(id: { eq: $previousPostId }) {
			slug
			frontmatter {
				title
			}
		}
		next: mdx(id: { eq: $nextPostId }) {
			slug
			frontmatter {
				title
			}
		}
	}
`
