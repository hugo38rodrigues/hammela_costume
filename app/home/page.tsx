import { BestPictures } from '@/components/best-pictures'
import Image from 'next/image'

export default function Home() {
	return (
		<>
			<header className=' w-full flex items-center justify-between'>
				<Image
					src={'/logo.webp'}
					alt='Mon logo'
					height={120}
					width={110}
				/>
				<h1 className='text-size-title text-heading font-family-title pr-16'>
					Hammela Costume
				</h1>
				<Image
					src={'/drapeau_français.webp'}
					alt='Un drapeau français'
					height={30}
					width={30}
				/>
			</header>
			<main>
				<h2 className='flex justify-center p-4 text-heading  font-family-text'>
					Les derniers modèles
				</h2>
				<div id='ctn-best-pictures'>
					<BestPictures />
				</div>
				<div
					id='ctn-1'
					className='p-4'
				>
					<div id='presentation'>
						<p
							className='
							'
						>
							Bonjour, je suis Sarah, costumière passionnée de
							couture et surtout de costumes historiques. Diplômée
							d'un CAP vêtement flou (2018), d'un bac
							professionnel métiers de la mode et du vêtement
							(2021) et d'un DN MADE spectacle spécialité
							costume à la Martinière Diderot à Lyon.
						</p>
						<p
							className='
							'
						>
							J'ai eu la chance de travailler dans différents
							univers : retouche, création de mode et robes de
							mariée, danse, théâtre et cinéma - notamment sur le film "Le
							Comte de Monte-Cristo" en 2024.
						</p>
					</div>
				</div>
				<div id='engagement'>
					<div id='engagement-list'>
						<ul>
							<li className='p-2'>
								<p>
									✨ Création française : Toutes les pièces
									sont imaginées et réalisées par mes soins
									dans mon atelier.
								</p>
							</li>
							<li className='p-2 '>
								<p>
									🌿 Éco-conception : Je privilégie la
									récupération de tissus (draps anciens,
									rideaux, dentelles chinées en vide-greniers)
									pour donner une seconde vie à ces matières
									nobles.
								</p>
							</li>
							<li className='p-2 '>
								<p>
									🎭 Inspiration historique : Mes créations
									s'inspirent des techniques et des esthétiques
									d'époque, adaptées avec des outils modernes.
									Car oui, un véritable costume historique
									cousu entièrement à la main prendrait des mois !
									Pourquoi se priver de la machine à coudre ?
								</p>
							</li>
						</ul>
						<p></p>
					</div>
				</div>
				<div
					id='passion'
					className='p-4'
				>
					<p>
						Le costume historique a toujours été une passion, mais
						c'est en découvrant la danse historique que j'ai réalisée
						ce qui m'anime vraiment, voir mes croquis prendre vie.
						J'aime styliser, confectionner et apporter une
						attention particulière aux détails qui donnent du
						charme et de l'authenticité à chaque création.
					</p>
				</div>
			</main>
		</>
	)
}
