import { FC } from 'react'
import { Picture } from '../lib/interface/picture'
import { getImages } from '../lib/load-pictures'
import { MyPictures } from './my-logo'

export const BestPictures: FC = () => {
	const images: Picture[] = getImages()
	
	return (
		<div className='grid grid-cols-3 gap-2 p-6 justify-items-center'>
			{images.map((file: Picture, index) => (
				<MyPictures
					alt={file.alt}
					src={file.src}
					key={index}
				/>
			))}
		</div>
	)
}
