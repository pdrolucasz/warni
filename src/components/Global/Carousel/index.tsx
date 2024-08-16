"use client"

import { FC, ReactNode, Children, useState, useEffect, ReactElement, cloneElement, useRef } from "react"

import { useMediaQuery } from "react-responsive"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { useScroll, useTransform, motion } from "framer-motion"

import { Button } from "../Buttons/Button"

interface CarouselProps {
	children: ReactNode
	middleCardUpped?: boolean
	leftButtonClassName?: string
	rightButtonClassName?: string
}

export const Carousel: FC<CarouselProps> = ({
	children: slides,
	middleCardUpped = false,
	leftButtonClassName = "",
	rightButtonClassName = "",
}) => {
	const [startIndex, setStartIndex] = useState(0)
	const [visibleCount, setVisibleCount] = useState(1)
	const [visibleCards, setVisibleCards] = useState([] as ReactElement[])
	const [parent] = useAutoAnimate({
		duration: 500,
	})
	const totalCards = Children.count(slides)

	// Breakpoints
	const isSmall = useMediaQuery({ query: "(max-width: 640px)" })
	const isMedium = useMediaQuery({ query: "(min-width: 641px) and (max-width: 1024px)" })
	const isLarge = useMediaQuery({ query: "(min-width: 1025px)" })

	const scrollLeft = () => {
		if (startIndex > 0) {
			setStartIndex(startIndex - 1)
		}
	}

	const scrollRight = () => {
		if (startIndex < totalCards - visibleCount) {
			setStartIndex(startIndex + 1)
		}
	}

	const target = useRef(null)
	const { scrollYProgress } = useScroll({
		target,
		offset: [
			[0, 0.75],
			[0.5, 0.6],
		],
	})

	const translateY = useTransform(scrollYProgress, [0, 1], [-24, -80]) // 5rem = 80px

	useEffect(() => {
		if (isLarge) setVisibleCount(3)
		if (isMedium) setVisibleCount(2)
		if (isSmall) setVisibleCount(1)
	}, [isSmall, isMedium, isLarge])

	useEffect(() => {
		setVisibleCards(Children.toArray(slides).slice(startIndex, startIndex + visibleCount) as ReactElement[])
	}, [slides, startIndex, visibleCount])

	return (
		<div className="relative" ref={target}>
			<div className="flex w-2/12 items-center">
				<Button
					onClick={scrollLeft}
					variant="ghost"
					className={`absolute -left-10 top-1/2 rounded-full bg-yellow-300 p-1 hover:bg-yellow-500 ${leftButtonClassName}`}
				>
					<ChevronLeft className="h-6 w-6 text-zinc-50" />
				</Button>
			</div>
			<div className="flex space-x-4" ref={parent}>
				{visibleCards.map((card, index) => {
					if (index === 1 && middleCardUpped && isLarge) {
						return (
							<motion.div
								key={card.key}
								style={{
									translateY,
								}}
							>
								{cloneElement(card, {
									style: {
										...card.props.style,
										// transform: "translateY(-5rem)",
										background: "#6b7280",
									},
								})}
							</motion.div>
						)
					}
					return card
				})}
			</div>
			<div className="flex w-2/12 items-center">
				<Button
					onClick={scrollRight}
					variant="ghost"
					className={`absolute -right-10 top-1/2 rounded-full bg-yellow-300 p-1 hover:bg-yellow-500 ${rightButtonClassName}`}
				>
					<ChevronRight className="h-6 w-6 text-zinc-50" />
				</Button>
			</div>
		</div>
	)
}
