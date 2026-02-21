export const EmailTemplate = (emailSender: string, description: string) => {
	return (
		<>
			<h3>Bonjour Sarah</h3>
			<p>
				Vocis la demande de {emailSender}:
				{description}
			</p>
		</>
	)
}
