import Link from 'next/link'
import { FC } from 'react'

export const NavBar: FC = () => {
	return (
		<div className='w-80 p-4 flex justify-around'>
			<Link
				href={'../home'}
				className='text-base-size text-nav'
			>
				Accueil
			</Link>
			<Link
				href={'../home/galerie'}
				className='text-base-size text-nav'
			>
				Galerie
			</Link>
			<Link
				href={'../home/contact'}
				className='text-base-size text-nav'
			>
				Contact
			</Link>
		</div>
	)
}
