'use client'

import { IS_EMAIL } from '@/lib/regex'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FC, useState } from 'react'
import { toast } from 'sonner'
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
} from './ui/card'
import { Input } from './ui/input'

import { Button } from './ui/button'
import { Field, FieldError, FieldLabel } from './ui/field'
import { Textarea } from './ui/textarea'

interface PropsFormContact {
	sendEmailAndDescription: (
		emai: string,
		description: string,
	) => Promise<{ success: boolean }>
}

export const FormContact: FC<PropsFormContact> = ({
	sendEmailAndDescription,
}) => {
	const [email, setEmail] = useState<string>('')
	const [description, setDescription] = useState<string>('')
	const [errorMessage, setErrorMessage] = useState<string>('')
	const [isErrorField, setIsErrorField] = useState<boolean>(false)

	const getEmailAndDescription = async (): Promise<void> => {
		if (!IS_EMAIL.test(email)) {
			setIsErrorField(true)
			setErrorMessage("L'email n'est pas au bon format")
		} else if (description.length < 10 || description.length > 1000) {
			setIsErrorField(true)
			setErrorMessage("Vous n'êtes pas un humain")
		} else {
			const sendResult = await sendEmailAndDescription(email, description)

			if (sendResult?.success) {
				toast.success('Un email a été envoyé à la créatrice', {
					position: 'bottom-left',
				})
			} else {
				toast.error('Une erreur est survenue', {
					position: 'bottom-left',
				})
			}
			resetUseState()
		}
	}

	const resetUseState = (): void => {
		setErrorMessage('')
		setDescription('')
		setIsErrorField(false)
		setEmail('')
	}

	return (
		<>
			<header className='p-4'>
				<h1 className='text-heading text-size-title font-family-title'>
					Contactez Moi
				</h1>
			</header>
			<main className='w-max h-max shadow-2xl max-sm:w-96'>
				<Card className='w-full h-full border-btn bg-neutral-50-50 border-2 bg-white'>
					<CardHeader className='flex flex-col'>
						<div
							id='ctn-email'
							className='w-48'
						>
							<Field
								data-invalid
								className='w-52'
							>
								<FieldLabel
									htmlFor='email'
									className={`pb-2 font-family-text ${isErrorField ? 'text-red-500' : 'text-paragraph'}`}
									aria-invalid={isErrorField}
								>
									Votre adresse mail
								</FieldLabel>
								<Input
									id='email'
									aria-invalid={isErrorField}
									className={cn(
										'border-2 focus-visible:ring-0 focus-visible:ring-offset-0 caret-gray-700 text-paragraph font-family-text',
										isErrorField
											? 'border-red-500 focus-visible:border-red-500'
											: 'border-btn focus-visible:border-btn',
									)}
									value={email}
									onChange={(e) =>
										setEmail(e.currentTarget.value)
									}
								/>
								{isErrorField && (
									<FieldError className='text-red-500 text-sm'>
										{errorMessage}
									</FieldError>
								)}
							</Field>
						</div>
						<CardAction className='flex justify-end w-full p-4'>
							<Link
								href={'/assets/fiche_mesure.pdf'}
								target='_blank'
								rel='noopener noreferrer'
								className='text-paragraph font-family-text underline decoration-1 decoration-gray-600'
							>
								Comment prendre vos mesures
							</Link>
						</CardAction>
					</CardHeader>
					<CardContent>
						<CardDescription className='p-2 flex flex-col justify-center'>
							<FieldLabel
								htmlFor='description'
								className={`pb-2 font-family-text text-paragraph text-size-body ${isErrorField ? 'text-red-500' : 'text-paragraph'}`}
								aria-invalid={isErrorField}
							>
								Pour toute commande, veuillez indiquer votre
								taille et toute autre information pour votre
								création.
							</FieldLabel>
							<Textarea
								id='description'
								name='description'
								required
								value={description}
								aria-invalid={isErrorField}
								className={cn(
									'w-auto h-96 border-2 focus-visible:ring-0 focus-visible:ring-offset-0 caret-gray-700 text-paragraph font-family-text max-sm:h-60',
									isErrorField
										? 'border-red-500 focus-visible:border-red-500'
										: 'border-btn focus-visible:border-btn',
								)}
								onChange={(e) =>
									setDescription(e.currentTarget.value)
								}
							/>
						</CardDescription>
					</CardContent>
					<CardFooter>
						<Button
							className='border-btn text-paragraph font-family-text border-2 cursor-pointer hover:bg-gray-600 hover:text-white'
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
