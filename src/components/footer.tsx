
import { FC } from 'react'
import { MyPictures } from './my-logo'
import Link from 'next/link'

export const Footer: FC = () => {
	return (
		<footer>
			<h2>Vous pouvez me contacter sur mes autres réseaux</h2>
			<ul>
				<ol id='instagram'>
					<Link
						href={`${process.env.INSTAGRAM_URL}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						<MyPictures
							alt='logo instagram'
							height={36}
							src='/icons/instagram.webp'
							width={36}
						/>
					</Link>
				</ol>
				<ol id='pinterest'>
					<Link
						href={`${process.env.PINTEREST_URL}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						<MyPictures
							alt='logo pinterest'
							height={36}
							src='/icons/pinterest.webp'
							width={36}
						/>
					</Link>
				</ol>
				<ol id='facebook'>
					<Link
						href={`${process.env.FACEBOOK_URL}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						<MyPictures
							alt='logo facebook'
							height={36}
							src='/icons/facebook.webp'
							width={36}
						/>
					</Link>
				</ol>
				<ol id='linkedin'>
					<Link
						href={`${process.env.LINKEDIN_URL}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						<MyPictures
							alt='logo linkedin'
							height={36}
							src='/icons/linkedin.webp'
							width={36}
						/>
					</Link>
				</ol>
			</ul>
		</footer>
	)
}
