import fs from 'fs'
import path from 'path'

interface Picture {
	src: string
	alt: string
}

export const getImages = (): Picture[] => {
	const uploadsDir = path.join(process.cwd(), 'public/assets')

	if (!fs.existsSync(uploadsDir)) {
		return []
	}

	const files = fs
		.readdirSync(uploadsDir)
		.filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))

	return files.map((file) => ({
		src: `/assets/${file}`,
		alt: file,
	}))
}
