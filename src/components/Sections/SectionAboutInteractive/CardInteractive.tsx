"use client"

import { FC, MutableRefObject, useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"

interface CardInteractiveProps {
	word: string
	constraintsRef: MutableRefObject<null>
}

export const CardInteractive: FC<CardInteractiveProps> = ({ word, constraintsRef }) => {
	const controls = useAnimation()
	const [innerWidth, setInnerWidth] = useState(320)
	const [randomX, setRandomX] = useState(0)
	const [randomY, setRandomY] = useState(-200)

	useEffect(() => {
		if (typeof window !== "undefined") {
			setInnerWidth(window.innerWidth)
		}
	}, [])

	useEffect(() => {
		if (typeof window !== "undefined") {
			setRandomX(Math.random() * (innerWidth - 200) - (innerWidth / 2 - 100))
			setRandomY(Math.random() * (384 - 200) - (384 / 2 - 100))
		}
	}, [innerWidth])

	const fallAnimation = {
		initial: { y: -200 },
		animate: {
			y: [0, randomY + 40, randomY],
			transition: { duration: 1.5, ease: "easeInOut" },
		},
	}

	return (
		<motion.div
			className={`absolute cursor-grab rounded-full bg-orange-950 p-2 shadow-2xl active:cursor-grabbing lg:p-4 ${Math.random() < 0.5 ? "text-yellow-300" : ""}`}
			style={{ x: randomX }}
			drag
			dragElastic={0}
			dragConstraints={constraintsRef}
			initial="initial"
			animate={controls}
			whileInView="animate"
			viewport={{ once: true }}
			variants={fallAnimation}
		>
			<h1 className="text-sm font-bold lg:text-4xl">{word}</h1>
		</motion.div>
	)
}
