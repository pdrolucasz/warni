"use client"

import { FC, MutableRefObject, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface CardInteractiveProps {
	word: string
	constraintsRef: MutableRefObject<null>
}

export const CardInteractive: FC<CardInteractiveProps> = ({ word, constraintsRef }) => {
	const [innerWidth, setInnerWidth] = useState(320)
	const [randomX, setRandomX] = useState(0)
	const [randomY, setRandomY] = useState(0)

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

	return (
		<motion.div
			key={word}
			className={`absolute rounded-full bg-orange-950 p-2 shadow-2xl lg:p-4 ${Math.random() < 0.5 ? "text-yellow-300" : ""}`}
			style={{ x: randomX, y: randomY }}
			drag
			dragElastic={0}
			dragConstraints={constraintsRef}
		>
			<h1 className="text-sm font-bold lg:text-4xl">{word}</h1>
		</motion.div>
	)
}
