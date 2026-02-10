import { NavBar } from "@/components/nav-bar"


export default function HomeLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='w-full h-full flex flex-col items-center p-4'>
			<NavBar />
			{children}
		</div>
	)
}
