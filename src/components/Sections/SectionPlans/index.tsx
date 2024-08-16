import { FC } from "react"
import { Settings } from "lucide-react"

import { Carousel } from "@/components/Global/Carousel"

export const SectionPlans: FC = () => {
	return (
		<section className="flex min-h-screen flex-col items-center justify-center gap-24 bg-yellow-300 text-zinc-700">
			<h1 className="relative text-center text-2xl lg:text-4xl">
				Planos e estratégias diferenciadas para cada objetivo de negócio
			</h1>
			<div className="mx-auto flex items-center justify-center">
				<Carousel
					middleCardUpped
					leftButtonClassName="bg-zinc-400 p-1 hover:bg-zinc-500"
					rightButtonClassName="bg-zinc-400 p-1 hover:bg-zinc-500"
				>
					{Array(10)
						.fill(null)
						.map((_, index) => (
							<div
								key={index}
								className="group flex max-w-72 flex-col gap-6 rounded-md bg-zinc-700 px-6 py-10 text-zinc-50"
							>
								<Settings className="h-8 w-8 text-yellow-500 transition-all" />
								<h2 className="relative text-sm leading-3">
									Plano
									<span className="ml-1 block text-2xl font-bold text-yellow-300">Start</span>
								</h2>
								<p className="text-md">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry standard dummy text ever since the 1500s
								</p>
								<ul className="list-disc px-8">
									<li className="text-sm">Planejamento</li>
									<li className="text-sm">Jornalismo e redação</li>
									<li className="text-sm">Design e criação</li>
									<li className="text-sm">Gestão de anúncios pagos</li>
									<li className="text-sm">Análise estratégica</li>
								</ul>
							</div>
						))}
				</Carousel>
			</div>
		</section>
	)
}
