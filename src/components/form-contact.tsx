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
	CardTitle,
} from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { Button } from './ui/button'
import { Field, FieldError } from './ui/field'
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
			<main className='w-lg h-lg shadow-2xl'>
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
								<Label
									htmlFor='email'
									className={`pb-2 font-family-text ${isErrorField ? 'text-red-500' : 'text-paragraph'}`}
									aria-invalid={isErrorField}
								>
									Votre adresse mail
								</Label>
								<Input
									id='email'
									aria-invalid={isErrorField}
									className={cn(
										'test-shadow-2xl focus-visible:ring-0 focus-visible:ring-offset-0',
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
							<Button
								asChild
								className='text-card border-2 border-btn focus-visible:ring-0 focus-visible:ring-offset-0 shadow-2xl'
							>
								<Link
									href={'/assets/fiche_mesure.pdf'}
									target='_blank'
									className='text-paragraph font-family-text'
								>
									Comment prendre vos mesures
								</Link>
							</Button>
						</CardAction>
					</CardHeader>
					<CardContent>
						<CardTitle>
							<p className='text-paragraph text-size-body font-family-text p-4 '>
								Pour toute commande, merci de renseigner votre
								taille et toute autre information pour votre
								création.
							</p>
						</CardTitle>
						<CardDescription className='p-4 flex justify-center'>
							<Field data-invalid>
								<Textarea
									id='description'
									name='description'
									required
									value={description}
									aria-invalid={isErrorField}
									className={cn(
										'w-80 h-44 border-2 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-2xl',
										isErrorField
											? 'border-red-500 focus-visible:border-red-500'
											: 'border-btn focus-visible:border-btn',
									)}
									onChange={(e) =>
										setDescription(e.currentTarget.value)
									}
								/>
							</Field>
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
