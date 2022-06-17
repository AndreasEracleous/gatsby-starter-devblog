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
				className="relative flex cursor-pointer flex-col rounded-xl bg-white shadow transition ease-in-out hover:scale-105"
				key={id}
			>
				<Link to={`/${slug}`} className="h-full text-slate-800 hover:underline">
					<div>
						<div className="mx-auto block h-56 w-full">
							<Image
								className="h-56 max-w-full rounded-t-xl"
								filename={frontmatter?.featuredImage}
								title={frontmatter?.title}
							/>
						</div>
						<header className="px-3 py-3 md:px-5">
							<time
								className="text-base font-light text-slate-500"
								dateTime={frontmatter?.datetime}
							>
								{frontmatter?.date}
							</time>
							<h3 className="m-0 text-xl font-semibold dark:text-slate-800">
								{frontmatter?.title}
							</h3>
						</header>
					</div>
				</Link>
			</article>
		),
	)

	const handlePaginationPage = currentNum => {
		selectedDataIndex.current = currentNum
	}

	return (
		<>
			<section className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10">
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
