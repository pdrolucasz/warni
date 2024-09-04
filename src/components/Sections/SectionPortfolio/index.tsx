"use client"

import { FC, useRef, useState } from "react"
import { motion } from "framer-motion"
import { CardPortfolio } from "./CardPortfolio"

export const SectionPortfolio: FC = () => {
	const constraintsRef = useRef(null)

	const [works, setWorks] = useState([
		{
			id: 1,
			zIndex: "auto" as string | number,
			rotate: Math.random() < 0.5 ? 15 : -15,
			imageSrc: "https://naylawp.pethemes.com/wp-content/uploads/2023/08/ink-sense_24.jpg",
			slug: "ink-sense",
			title: "ink sense",
			description: "web design",
			year: "2023",
		},
		{
			id: 2,
			zIndex: "auto",
			rotate: Math.random() < 0.5 ? 15 : -15,
			imageSrc: "https://naylawp.pethemes.com/wp-content/uploads/2023/08/curology_featured.jpg",
			slug: "curology",
			title: "curology",
			description: "branding",
			year: "2019",
		},
		{
			id: 3,
			zIndex: "auto",
			rotate: Math.random() < 0.5 ? 15 : -15,
			imageSrc: "https://naylawp.pethemes.com/wp-content/uploads/2023/08/percent_19.jpg",
			slug: "percent",
			title: "percent",
			description: "ui/ux design",
			year: "2018",
		},
		{
			id: 4,
			zIndex: "auto",
			rotate: Math.random() < 0.5 ? 15 : -15,
			imageSrc: "https://naylawp.pethemes.com/wp-content/uploads/2023/08/architexture_1-2.jpg",
			slug: "architexture",
			title: "architexture",
			description: "art direction",
			year: "2017",
		},
	])

	return (
		<section className="relative flex flex-col items-center justify-center gap-6 overflow-hidden bg-zinc-700 pb-12 text-zinc-50 lg:min-h-screen lg:gap-12">
			<h1 className="text-center text-2xl font-thin lg:text-4xl">Nosso portifólio</h1>
			<motion.div
				className="flex h-screen w-full place-content-center place-items-center overflow-hidden"
				ref={constraintsRef}
			>
				{works.map((work) => (
					<CardPortfolio key={work.id} work={work} setWorks={setWorks} constraintsRef={constraintsRef} />
				))}
			</motion.div>
		</section>
	)
}
