import { SectionTop } from "@/components/Sections/SectionTop"
import { SectionServices } from "@/components/Sections/SectionServices"

export default function Home() {
	// https://dev.to/dailydevtips1/tailwind-css-full-screen-video-header-5539
	return (
		<main>
			<SectionTop />
			<SectionServices />
			<section className="flex min-h-screen items-center justify-center bg-yellow-300 uppercase text-zinc-50">
				<h1 className="max-w-full whitespace-normal break-words text-center text-5xl lg:text-9xl">
					Ações estratégicas para alcançar os objetivos do seu negócio
				</h1>
			</section>
		</main>
	)
}
