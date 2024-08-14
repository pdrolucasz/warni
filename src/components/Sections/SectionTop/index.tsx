import { FC } from "react"

export const SectionTop: FC = () => {
	return (
		<section className="flex min-h-screen items-center justify-center">
			<h1 className="relative text-4xl font-bold text-zinc-700 lg:text-6xl">
				Ideias e Soluções em
				<span className="relative inline-block h-16 w-full overflow-hidden text-center align-bottom">
					<span className="absolute left-0 h-full w-full animate-rotateText opacity-0 animate-delay-[1.5s]">
						marketing
						<span className="absolute bottom-1/4 left-1/4 -z-10 h-6 w-2/4 translate-x-1/4 transform bg-yellow-300 lg:bottom-0 lg:h-8" />
					</span>
					<span className="absolute left-0 h-full w-full animate-rotateText opacity-0 animate-delay-[3s]">
						mídias sociais
						<span className="absolute bottom-1/4 left-1/4 -z-10 h-6 w-2/4 translate-x-1/4 transform bg-yellow-300 lg:bottom-0 lg:h-8" />
					</span>
					<span className="absolute left-0 h-full w-full animate-rotateText opacity-0 animate-delay-[4.5s]">
						design
						<span className="absolute bottom-1/4 left-1/4 -z-10 h-6 w-2/4 translate-x-1/4 transform bg-yellow-300 lg:bottom-0 lg:h-8" />
					</span>
					<span className="absolute left-0 h-full w-full animate-rotateText opacity-0 animate-delay-[6s]">
						publicidade
						<span className="absolute bottom-1/4 left-1/4 -z-10 h-6 w-2/4 translate-x-1/4 transform bg-yellow-300 lg:bottom-0 lg:h-8" />
					</span>
				</span>
			</h1>
			<video
				autoPlay
				loop
				muted
				className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden object-cover"
			>
				<source src="https://cdn.pixabay.com/video/2019/08/13/26011-353916142_large.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</section>
	)
}
