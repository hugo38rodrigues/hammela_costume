import { EmailTemplate } from '@/components/email-template'
import { FormContact } from '@/components/form-contact'
import { Resend } from 'resend'



export default function Contact() {
	const sendEmailAndDescription = async (
		email: string,
		description: string,
	) => {
		'use server'
		const resend = new Resend(process.env.RESEND_API_KEY)
		
		const { error } = await resend.emails.send({
			from: 'Contact Form <onboarding@resend.dev>',
			to: [`${process.env.EMAIL_RECEIVER}`],
			subject: 'Commande depuis le site',
			react: EmailTemplate(email, description),
		})

		if (error) {
			return { success: false }
		}
		return { success: true }
	}

	return (
		<>
			<FormContact sendEmailAndDescription={sendEmailAndDescription} />
		</>
	)
}
