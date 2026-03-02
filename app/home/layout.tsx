import { Footer } from '@/components/footer'
import { NavBar } from '@/components/nav-bar'

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<div className='w-full min-h-screen flex flex-col items-center p-4 bg-fond bg-cover bg-center bg-no-repeat bg-fixed'>
				<NavBar />
				{children}
				<Footer />
			</div>
		</>
	)
}
