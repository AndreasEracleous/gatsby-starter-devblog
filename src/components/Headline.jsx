import React from 'react'
import PropTypes from 'prop-types'

const Headline = ({ text }) => {
	if (typeof text === 'string') {
		return <h1 className="max-w-5xl tracking-tight">{text}</h1>
	}

	if (typeof text === 'object') {
		let { line1: text1, line2: text2 } = text
		if (text2) {
			text2 = (
				<>
					<span className="text-blue-500">{text2}</span>.
				</>
			)
		}
		return (
			<h1 className="max-w-5xl tracking-tight">
				{text1}
				<br />
				{text2}
			</h1>
		)
	}
}

Headline.propTypes = {
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
}

export default Headline
