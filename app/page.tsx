import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function LandingPage() {
	return (
		<main  className='w-full h-full flex '>
			<div
				id=''
				className='bg-sky-300 w-md'
			></div>
			<div className='flex flex-col items-center justify-evenly w-full h-full'>
				<div id='logo'>
					<Image
						src='/logo.webp'
						alt=''
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
				id=''
				className='bg-sky-300 w-md'
			></div>
		</main>
	)
}
