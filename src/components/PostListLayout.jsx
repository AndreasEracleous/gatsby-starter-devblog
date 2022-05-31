import { Link } from 'gatsby'
import React, { useRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import Image from './Image'
import Pagination from './Pagination'
import { SITE_CONFIG } from '../config/constants'

const chunkList = (list, size) => {
	let length = list.length
	let chunked = []
	Array.from({ length: Math.ceil(length / size) }, (val, i) => {
		return chunked.push(list.slice(i * size, i * size + size))
	})
	return chunked
}

const PostListLayout = ({ data }) => {
	const selectedDataIndex = useRef(0)
	const postsPerPage = SITE_CONFIG['postsPerPage']
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const memoizedData = useMemo(() => chunkList(data, postsPerPage), [])
	const chunkPostLength = memoizedData.length
	if (chunkPostLength === 0) {
		return
	}
	const postCard = memoizedData[selectedDataIndex.current].map(
		({ id, frontmatter, slug }, index) => (
			<article
				className="relative group cursor-pointer rounded-xl shadow bg-white transition ease-in-out hover:-translate-y-1 hover:scale-105	duration-200"
				key={id}
			>
				<Link className="block mx-auto w-full h-56" to={`/${slug}`}>
					<Image
						className="rounded-t-xl max-w-full h-56"
						filename={frontmatter?.featuredImage}
						title={frontmatter?.title}
						withFallback={!frontmatter?.featuredImage}
					/>
				</Link>
				<header className="px-3 md:px-5 py-3">
					<time
						className="text-slate-500 font-light text-base"
						dateTime={frontmatter?.datetime}
					>
						{frontmatter?.date}
					</time>
					<h3 className="text-xl font-semibold m-0">
						<Link
							className="block group-hover:underline text-slate-800"
							to={`/${slug}`}
						>
							{frontmatter?.title}
						</Link>
					</h3>
				</header>
			</article>
		),
	)

	const handlePaginationPage = currentNum => {
		selectedDataIndex.current = currentNum
	}

	return (
		<>
			<section className="mt-16 grid gap-5 md:gap-8 xl:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
				{postCard}
			</section>
			<Pagination
				length={chunkPostLength}
				callBackResult={handlePaginationPage}
			/>
		</>
	)
}

PostListLayout.propTypes = {
	data: PropTypes.array.isRequired,
}

export default PostListLayout
