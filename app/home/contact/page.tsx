
import { FormContact } from '@/components/form-contact'

export default function Contact() {

	const sendEmailAndDescription= async (email: string, description: string)=> {
		'use server'
		console.log({ email, description })
	}
	
	return (
		<>
			<FormContact sendEmailAndDescription={sendEmailAndDescription} />
		</>
	)
}
