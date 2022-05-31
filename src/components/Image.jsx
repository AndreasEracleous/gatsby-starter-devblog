import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Fallback from '../assets/svg/fallback.svg'

const Image = ({ className, title, filename, withFallback = false }) => {
	const imageData = getImage(filename)

	if (!imageData) {
		return withFallback ? <Fallback className={className} /> : null
	}

	return <GatsbyImage className={className} image={imageData} alt={title} />
}

export default Image
