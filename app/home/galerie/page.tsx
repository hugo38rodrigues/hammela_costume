import { MyPictures } from '@/components/my-logo'
import { getPictures } from '@/lib/load-pictures'

export default function Galerie() {
	
	const images = getPictures()

	return (
		<main
			id='ctn-galerie'
			className='min-w-full min-h-screen m-8 flex flex-col items-center'
		>
			<h1 className='text-size-title text-heading font-family-title'>
				Bienvenue dans ma galerie
			</h1>
			<p className='max-sm:pl-4'>De nouveaux modèles sont en cours de création</p>
			<div
				id='ctn-pictures'
				className='flex flex-wrap justify-center w-4xl h-9/12'
			>
				{images.map((images: Picture, index) => (
					<div
						id={`picture-${index}`}
						className='p-4'
						key={index}
					>
						<MyPictures
							src={images.src}
							alt={images.alt}
							height={160}
							width={150}
						/>
					</div>
				))}
			</div>
		</main>
	)
}
