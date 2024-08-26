"use client"

import { FC, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export const SectionAbout: FC = () => {
	const targetRef = useRef<HTMLDivElement | null>(null)
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end end"],
	})

	const textX = useTransform(scrollYProgress, [0, 1], [100, 0])
	const x = useTransform(scrollYProgress, [0, 1], ["200%", "0%"])
	const position = useTransform(scrollYProgress, [0, 1], ["sticky", "relative"])
	const backgroundColor = useTransform(scrollYProgress, [0, 1], ["#fde047", "#3f3f46"])

	return (
		<motion.section ref={targetRef} className="relative min-h-screen" style={{ backgroundColor }}>
			<motion.div className="sticky top-0 flex h-[50vh] items-center overflow-hidden" style={{ position }}>
				<motion.div style={{ x }} className="flex gap-4">
					<motion.h1
						className="text-4xl font-medium uppercase text-yellow-300 lg:text-8xl"
						style={{ x: textX }}
					>
						Somos a Warni
					</motion.h1>
				</motion.div>
			</motion.div>
			<div className="grid h-[50vh] grid-cols-2 divide-x text-center text-zinc-50">
				<p className="content-center text-xl lg:text-6xl">
					<span className="block">10</span>
					anos criando soluções
				</p>
				<div className="grid grid-cols-1 content-center lg:grid-cols-2">
					<div className="grid grid-rows-1 gap-6 lg:grid-rows-2">
						<p className="text-xs lg:text-sm">
							<span className="block text-xl font-bold lg:text-6xl">+32</span>
							contas de google ads{" "}
							<span className="lg: block text-sm underline lg:text-lg">gerenciadas</span>
						</p>
						<p className="text-xs lg:text-sm">
							<span className="block text-xl font-bold lg:text-6xl">+32</span>
							contas de google ads{" "}
							<span className="lg: block text-sm underline lg:text-lg">gerenciadas</span>
						</p>
					</div>
					<div className="grid grid-rows-1 gap-6 lg:grid-rows-2">
						<p className="text-xs lg:text-sm">
							<span className="block text-xl font-bold lg:text-6xl">+32</span>
							contas de google ads{" "}
							<span className="lg: block text-sm underline lg:text-lg">gerenciadas</span>
						</p>
						<p className="text-xs lg:text-sm">
							<span className="block text-xl font-bold lg:text-6xl">+32</span>
							contas de google ads{" "}
							<span className="lg: block text-sm underline lg:text-lg">gerenciadas</span>
						</p>
					</div>
				</div>
			</div>
		</motion.section>
	)
}
