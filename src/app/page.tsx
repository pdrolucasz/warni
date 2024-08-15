import { SectionTop } from "@/components/Sections/SectionTop"
import { SectionServices } from "@/components/Sections/SectionServices"
import { SectionIntroPlans } from "@/components/Sections/SectionIntroPlans"

export default function Home() {
	// https://dev.to/dailydevtips1/tailwind-css-full-screen-video-header-5539
	return (
		<main>
			<SectionTop />
			<SectionServices />
			<SectionIntroPlans />
			<div className="min-h-screen" />
		</main>
	)
}
