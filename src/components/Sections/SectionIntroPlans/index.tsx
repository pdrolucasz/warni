"use client"

import { FC, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export const SectionIntroPlans: FC = () => {
	const target = useRef(null)
	const { scrollYProgress } = useScroll({
		target,
		offset: [
			[0, 0.75],
			[0.5, 0.6],
		],
	})
	const scale = useTransform(scrollYProgress, [0, 1], [2, 1])

	return (
		<section className="flex items-center justify-center overflow-hidden bg-yellow-300 pt-6 uppercase text-zinc-50 lg:min-h-screen lg:pt-0">
			<motion.div ref={target} style={{ scale }} transition={{ duration: 1, ease: "easeInOut" }}>
				<h1 className="max-w-screen-2xl text-center text-4xl lg:text-8xl">
					Ações estratégicas para alcançar os objetivos do seu negócio
				</h1>
			</motion.div>
		</section>
	)
}
