import Image from 'next/image'
import { FC } from 'react'
import { Picture } from '../lib/interface/picture'

export const MyLogo: FC<Picture> = ({ alt, src }) => {
	return (
		<>
			<Image
				src={src}
				alt={alt}
				width={160}
				height={160}
			/>
		</>
	)
}
