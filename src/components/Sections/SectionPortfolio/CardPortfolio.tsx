"use client"

import { Dispatch, FC, MutableRefObject, SetStateAction, useCallback, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/Global/Buttons/Button"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

type CardWorkProps = {
	id: number
	zIndex: string | number
	rotate: number
	imageSrc: string
	slug: string
	title: string
	description: string
	year: string
}

interface CardPortfolioProps {
	work: CardWorkProps
	setWorks: Dispatch<SetStateAction<CardWorkProps[]>>
	constraintsRef: MutableRefObject<null>
}

export const CardPortfolio: FC<CardPortfolioProps> = ({ work, setWorks, constraintsRef }) => {
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

	const onTapStarted = useCallback(
		(id: number) => {
			setWorks((values) =>
				values.map((value) => {
					if (value.id === id) {
						return {
							...value,
							zIndex: 2,
						}
					}
					return {
						...value,
						zIndex: "auto",
					}
				}),
			)
		},
		[setWorks],
	)

	return (
		<motion.div
			className="absolute flex h-auto w-[65vw] cursor-grab flex-col gap-2 rounded-lg bg-zinc-50 p-1 shadow-lg active:cursor-grabbing lg:w-[20vw] lg:p-2"
			style={{ x: randomX, y: randomY, rotate: work.rotate, zIndex: work.zIndex }}
			drag
			dragElastic={0}
			dragConstraints={constraintsRef}
			onTapStart={() => onTapStarted(work.id)}
		>
			<div className="pointer-events-none h-full w-full overflow-hidden rounded-lg">
				<img src={work.imageSrc} className="touch-none" alt={work.title} />
			</div>
			<div className="flex items-center justify-between">
				<h1 className="text-lg uppercase text-zinc-700 lg:text-xl">{work.title}</h1>
				<Link href={`/${work.slug}`}>
					<Button variant="ghost">
						<ArrowUpRight className="h-6 w-6 lg:h-8 lg:w-8" />
					</Button>
				</Link>
			</div>
			<div className="flex items-center justify-between">
				<p className="text-sm uppercase text-zinc-700 lg:text-base">{work.description}</p>
				<p className="text-sm text-zinc-700 lg:text-base">{work.year}</p>
			</div>
		</motion.div>
	)
}
