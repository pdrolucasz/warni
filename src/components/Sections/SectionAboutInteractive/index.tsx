"use client"

import { FC, useRef } from "react"
import { motion } from "framer-motion"

export const SectionAboutInteractive: FC = () => {
	const constraintsRef = useRef(null)

	const words = ["planejamento", "estratégia", "design", "inovação", "marketing"]

	return (
		<section className="relative flex min-h-screen flex-col items-center justify-center gap-6 bg-zinc-700 text-zinc-50">
			<h1 className="text-center text-2xl font-thin lg:text-4xl">
				Acreditamos que toda marca e empresa tem o potencial para se destacar e creser no mercado
			</h1>
			<motion.div
				className="flex h-96 w-full place-content-center place-items-center overflow-hidden"
				ref={constraintsRef}
			>
				{words.map((word) => (
					<motion.div
						key={word}
						className={`rounded-full bg-orange-950 p-4 shadow-2xl ${Math.random() < 0.5 ? "text-yellow-300" : ""}`}
						drag
						dragElastic={0}
						dragConstraints={constraintsRef}
					>
						<h1 className="text-2xl font-bold lg:text-4xl">{word}</h1>
					</motion.div>
				))}
			</motion.div>
		</section>
	)
}
