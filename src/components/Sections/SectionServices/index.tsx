import { FC } from "react"
import { MessageSquareText } from "lucide-react"

import { Carousel } from "@/components/Global/Carousel"

export const SectionServices: FC = () => {
	return (
		<section className="flex min-h-screen flex-col items-center justify-center gap-6 text-zinc-700">
			<h1 className="relative text-center text-2xl lg:text-4xl">
				Mix completo de soluções
				<span className="block font-bold">
					para sua empresa
					<span className="absolute bottom-0 -z-10 h-4 w-1/2 -translate-x-32 transform bg-yellow-300 lg:-translate-x-44" />
				</span>
			</h1>
			<div className="mx-auto flex items-center justify-center">
				<Carousel>
					{Array(10)
						.fill(null)
						.map((_, index) => (
							<div
								key={index}
								className="group flex max-w-56 flex-col gap-6 rounded-md border border-zinc-300 px-6 py-10 transition-all hover:scale-105 hover:cursor-pointer hover:bg-yellow-300 lg:max-w-72"
							>
								<MessageSquareText className="h-8 w-8 text-yellow-500 transition-all group-hover:-rotate-12 group-hover:scale-150 group-hover:text-yellow-100" />
								<h2 className="relative text-lg font-bold lg:text-xl">
									Gestão de mídias sociais({index})
									<span className="absolute bottom-0 -z-10 h-3 w-1/2 -translate-x-1/2 transform bg-yellow-300 group-hover:bg-yellow-100" />
								</h2>
								<p className="text-sm lg:text-base">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry standard dummy text ever since the 1500s
								</p>
								<ul className="list-disc px-8">
									<li className="text-xs lg:text-sm">Planejamento</li>
									<li className="text-xs lg:text-sm">Jornalismo e redação</li>
									<li className="text-xs lg:text-sm">Design e criação</li>
									<li className="text-xs lg:text-sm">Gestão de anúncios pagos</li>
									<li className="text-xs lg:text-sm">Análise estratégica</li>
								</ul>
							</div>
						))}
				</Carousel>
			</div>
		</section>
	)
}
