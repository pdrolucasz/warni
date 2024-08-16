import { SectionTop } from "@/components/Sections/SectionTop"
import { SectionServices } from "@/components/Sections/SectionServices"
import { SectionIntroPlans } from "@/components/Sections/SectionIntroPlans"
import { SectionPlans } from "@/components/Sections/SectionPlans"

export default function Home() {
	// https://dev.to/dailydevtips1/tailwind-css-full-screen-video-header-5539
	return (
		<main>
			<SectionTop />
			<SectionServices />
			<SectionIntroPlans />
			<SectionPlans />
			<div className="min-h-screen" />
		</main>
	)
}
