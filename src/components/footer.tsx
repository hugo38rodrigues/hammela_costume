import Link from 'next/link'
import { FC } from 'react'
import { MyPictures } from './my-logo'

export const Footer: FC = () => {
	return (
		<footer className='w-full flex items-center flex-col pt-6'>
			<h2 className='text-heading text-size-body'>Réseaux</h2>
			<ul className='flex'>
				<ol
					id='instagram'
					className='p-2'
				>
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
				<ol
					id='pinterest'
					className='p-2'
				>
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
				<ol
					id='facebook'
					className='p-2'
				>
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
				<ol
					id='linkedin'
					className='p-2'
				>
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
				<ol
					id='tiktok'
					className='p-2'
				>
					<Link
						href={`${process.env.TIKTOK_URL}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						<MyPictures
							alt='logo TikTok'
							height={36}
							src='/icons/tiktok.webp'
							width={36}
						/>
					</Link>
				</ol>
			</ul>
		</footer>
	)
}
