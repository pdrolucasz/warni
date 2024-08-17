import { SectionTop } from "@/components/Sections/SectionTop"
import { SectionPlans } from "@/components/Sections/SectionPlans"
import { SectionAbout } from "@/components/Sections/SectionAbout"
import { SectionServices } from "@/components/Sections/SectionServices"
import { SectionIntroPlans } from "@/components/Sections/SectionIntroPlans"
import { SectionAboutInteractive } from "@/components/Sections/SectionAboutInteractive"

export default function Home() {
	// https://dev.to/dailydevtips1/tailwind-css-full-screen-video-header-5539
	return (
		<main>
			<SectionTop />
			<SectionServices />
			<SectionIntroPlans />
			<SectionPlans />
			<SectionAbout />
			<SectionAboutInteractive />
		</main>
	)
}
