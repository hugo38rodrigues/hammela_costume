import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const cormorant = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-family-title',
})

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-family-text',
})

export const metadata: Metadata = {
	title: 'Hammela Costume',
	description: 'Hammela Costume est une entreprise de création de costumes, offrant une large gamme pour tous les âges et tous les styles.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='fr'
		>
			<body
				className={cn(
					montserrat.variable,
					cormorant.variable,
					'antialiased',
				)}
			>
				{children}
				<Toaster
					toastOptions={{
						classNames: {
							success: '!bg-green-500 !text-white !border-none',
							error: '!bg-red-500 !text-white !border-none',
						},
					}}
				/>
			</body>
		</html>
	)
}
