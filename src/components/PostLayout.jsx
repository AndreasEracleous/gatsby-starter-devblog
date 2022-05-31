import { Link } from 'gatsby'
import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Image from './Image'

const PostLayout = ({
	featuredImage,
	title,
	content,
	date,
	datetime,
	previous,
	next,
}) => {
	let previousLink
	let nextLink

	if (previous && previous?.slug) {
		previousLink = (
			<Link className="pagination-prev" to={`/${previous.slug}`}>
				{previous.frontmatter.title}
			</Link>
		)
	}
	if (next && next?.slug) {
		nextLink = (
			<Link className="pagination-next ml-auto" to={`/${next.slug}`}>
				{next.frontmatter.title}
			</Link>
		)
	}

	return (
		<>
			<article className="text-base">
				<Image
					className="max-w-sm lg:max-w-md rounded-lg lg:ml-10 mb-10 lg:float-right"
					filename={featuredImage}
					title={title}
				/>

				<header className="mb-5">
					<time className="block text-slate-500 mb-2" dateTime={datetime}>
						{date}
					</time>
					<h1 className="md:text-5xl font-semibold capitalize">{title}</h1>
				</header>
				<MDXRenderer>{content}</MDXRenderer>
			</article>
			<hr className="my-3 border-slate-300 dark:border-slate-700" />
			<div className="flex justify-between">
				{previousLink}
				{nextLink}
			</div>
		</>
	)
}

export default PostLayout
