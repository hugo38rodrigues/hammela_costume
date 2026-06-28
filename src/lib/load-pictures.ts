import fs from 'fs'
import path from 'path'

export const shortedPictures = (picture: Picture[]): Picture[] => {
	return picture
		.sort(
			(a, b) =>
				b.createdAt!.getMilliseconds() - a.createdAt!.getMilliseconds(),
		) // les plus récentes en premier
		.slice(0, 6)
}

export const getPictures = (): Picture[] => {
	const imagesDir = path.join(process.cwd(), 'public/gallery')

	const files = fs.readdirSync(imagesDir)

	const images = files
		.filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
		.map((file) => {
			const filePath = path.join(imagesDir, file)
			const stats = fs.statSync(filePath)

			return {
				alt: file,
				src: `/assets/${file}`,
				createdAt: stats.birthtime, // date de création
				modifiedAt: stats.mtime, // date de modification
			}
		})
	return images
}
