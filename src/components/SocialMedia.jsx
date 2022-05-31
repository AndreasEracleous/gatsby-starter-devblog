import React from 'react'
import TwitterIcon from '../assets/svg/twitter.svg'
import LinkedinIcon from '../assets/svg/linkedin.svg'
import GithubIcon from '../assets/svg/github.svg'

const SocialMedia = () => {
	return (
		<div className="flex justify-end space-x-4 mt-3 ml-3">
			<p className="text-md my-auto">Follow me on:</p>
			<a
				href="https://twitter.com/AndreasFrontDev"
				aria-label="Twitter"
				target="_blank"
				rel="noreferrer"
			>
				<TwitterIcon className="text-slate-400 hover:text-sky-400 text-3xl h-8" />
			</a>
			<a
				href="https://cy.linkedin.com/in/andreaseracleous"
				aria-label="Linkedin"
				target="_blank"
				rel="noreferrer"
			>
				<LinkedinIcon className="text-slate-400 hover:text-sky-700 text-3xl h-8" />
			</a>
			<a
				href="https://github.com/AndreasEracleous"
				aria-label="Github"
				target="_blank"
				rel="noreferrer"
			>
				<GithubIcon className="text-slate-400 hover:text-slate-700 text-3xl h-8" />
			</a>
		</div>
	)
}

export default SocialMedia
