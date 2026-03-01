import Image from 'next/image'
import { FC } from 'react'
interface MyPictureProps {
	alt: string
	src: string
	width: number
	height: number
}

export const MyPictures: FC<MyPictureProps> = ({ alt, src, width, height }) => {
	return (
		<>
			<Image
				rel='preload'
				fetchPriority='high'
				src={src}
				alt={alt}
				width={width}
				height={height}
			/>
		</>
	)
}
