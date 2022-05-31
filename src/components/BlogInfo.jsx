import React from 'react'
import PropTypes from 'prop-types'

const BlogInfo = ({ header, description }) => {
	return (
		<>
			<h2 className="font-light text-2xl md:text-4xl mt-5 mb-4">{header}</h2>
			<p className="max-w-3xl text-base md:text-2xl">{description}</p>
		</>
	)
}

BlogInfo.defaultProps = {
	header: '',
	description: '',
}

BlogInfo.propTypes = {
	header: PropTypes.string,
	description: PropTypes.string,
}

export default BlogInfo
