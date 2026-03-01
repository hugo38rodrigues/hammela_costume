import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function LandingPage() {
	return (
		<main
			id='landing-page'
			className='min-w-full min-h-screen flex'
		>
			<div
				id='ctn-design-1'
				className='bg-sky-300 w-screen min-h-screen'
			></div>
			<div
				id='ctn-landing-page'
				className='flex flex-col items-center justify-evenly w-screen min-h-screen'
			>
				<div id='logo'>
					<Image
						src='/logo.webp'
						alt='Logo du site'
						width={160}
						height={160}
					/>
				</div>
				<div
					id='site-description'
					className='w-lg p-4'
				>
					<p className='font-text text-paragraph text-base-size font-semibold'>
						Bienvenue dans un univers de création et de style années
						1860, j'espère que ce voyage au coeur de la mode d'antan
						vous plaira.
					</p>
				</div>
				<div
					id='btn-send-home'
					className='p-4'
				>
					<Button
						asChild
						className='bg-inherit rounded-4xl border-2 text-card'
					>
						<Link
							className='font-text text-paragraph text-base-size font-semibold'
							href='/home'
						>
							Découvrir l'univers
						</Link>
					</Button>
				</div>
			</div>
			<div
				id='ctn-design-2'
				className='bg-sky-300 w-screen min-h-screen'
			></div>
		</main>
	)
}
