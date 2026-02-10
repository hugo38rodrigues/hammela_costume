'use client'

import { IS_EMAIL } from '@/lib/regex'
import Link from 'next/link'
import { FC, useState } from 'react'
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { Button } from './ui/button'
import { Field, FieldDescription } from './ui/field'

interface PropsFormContact {
	sendEmailAndDescription: (emai: string, description: string) => void
}

export const FormContact: FC<PropsFormContact> = ({
	sendEmailAndDescription,
}) => {
	const [email, setEmail] = useState<string>('')
	const [description, setDescription] = useState<string>('')
	const [errorMessage, setErrorMessage] = useState<string>('')

	const getEmailAndDescription = (): void => {
		
		if (!IS_EMAIL.test(email)) {
			setErrorMessage("L'email n'est pas au bon format")
		} else {
			sendEmailAndDescription(email, description)
			resetUseState()
		}
	}

	const resetUseState = (): void => {
		setErrorMessage('')
		setDescription('')
		setEmail('')
	}

	const hasNotGooDEmail: boolean = errorMessage.length > 1 ? true : false

	return (
		<>
			<header className='p-4'>
				<h1 className='text-title text-size-title font-family-title'>
					Contacter Moi
				</h1>
			</header>
			<main className='w-lg h-lg'>
				<Card className='w-full h-full border-btn bg-neutral-50-50 border-2'>
					<CardHeader className='flex flex-col'>
						<div
							id='ctn-email'
							className='w-48'
						>
							<Field data-invalid={hasNotGooDEmail}>
								<Label
									htmlFor='email'
									className='text-paragraph pb-2 font-family-text'
								>
									Votre adresse mail
								</Label>
								<Input
									id='email'
									aria-invalid={hasNotGooDEmail}
									onChange={(e) =>
										setEmail(e.currentTarget.value)
									}
								/>
								{hasNotGooDEmail && (
									<FieldDescription className='text-red-500'>
										{errorMessage}
									</FieldDescription>
								)}
							</Field>
						</div>
						<CardAction className='flex justify-end w-full p-4'>
							<Button
								asChild
								className='text-card border-2 border-btn'
							>
								<Link
									href={'/assets/fiche_mesure.pdf'}
									target='_blank'
									className='text-paragraph text-size-body font-family-text'
								>
									Comment prendre vos mesures
								</Link>
							</Button>
						</CardAction>
					</CardHeader>
					<CardContent>
						<CardTitle>
							<p className='text-paragraph text-size-body font-family-text p-4'>
								Pour toute commande, merci de renseigner votre
								taille et toute autre information pour votre
								création.
							</p>
						</CardTitle>
						<CardDescription className='p-4 flex justify-center'>
							<Input
								id='description'
								name='description'
								required
								className='w-80 h-44 border-btn border-2'
								onChange={(e) =>
									setDescription(e.currentTarget.value)
								}
							/>
						</CardDescription>
					</CardContent>
					<CardFooter className=''>
						<Button
							className='border-btn text-paragraph font-family-text border-2'
							onClick={getEmailAndDescription}
						>
							Envoyer
						</Button>
					</CardFooter>
				</Card>
			</main>
		</>
	)
}
