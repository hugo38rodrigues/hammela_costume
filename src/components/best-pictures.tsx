import { FC } from 'react'
import { getPictures, shortedPictures } from '../lib/load-pictures'
import { MyPictures } from './my-logo'

export const BestPictures: FC = () => {
	const images: Picture[] = getPictures()
	const shortPictures: Picture[] = shortedPictures(images)

	return (
		<div className='grid gap-3 p-4 grid-cols-[repeat(3,110px)] justify-center justify-items-center'>
			{shortPictures.map((file: Picture, index) => (
				<div
					id={`best-pictures-${index}`}
					key={index}
				>
					<MyPictures
						alt={file.alt}
						src={file.src}
						height={110}
						width={110}
					/>
				</div>
			))}
		</div>
	)
}
