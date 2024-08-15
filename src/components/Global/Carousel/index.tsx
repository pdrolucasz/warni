"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { FC, ReactNode, Children, useState, useEffect } from "react"
import { useAutoAnimate } from "@formkit/auto-animate/react"

import { useMediaQuery } from "react-responsive"

import { Button } from "../Buttons/Button"

interface CarouselProps {
	children: ReactNode
}

export const Carousel: FC<CarouselProps> = ({ children: slides }) => {
	const [startIndex, setStartIndex] = useState(0)
	const [visibleCount, setVisibleCount] = useState(1)
	const [parent] = useAutoAnimate({
		duration: 500,
	})
	const totalCards = Children.count(slides)

	// Breakpoints
	const isSmall = useMediaQuery({ query: "(max-width: 640px)" })
	const isMedium = useMediaQuery({ query: "(min-width: 641px) and (max-width: 1024px)" })
	const isLarge = useMediaQuery({ query: "(min-width: 1025px)" })

	const visibleCards = Children.toArray(slides).slice(startIndex, startIndex + visibleCount)

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

	useEffect(() => {
		if (isLarge) setVisibleCount(3)
		if (isMedium) setVisibleCount(2)
		if (isSmall) setVisibleCount(1)
	}, [isSmall, isMedium, isLarge])

	return (
		<div className="relative">
			<div className="flex w-2/12 items-center">
				<Button
					onClick={scrollLeft}
					variant="ghost"
					className="absolute -left-10 top-1/2 rounded-full bg-yellow-300 p-1 hover:bg-yellow-500"
				>
					<ChevronLeft className="h-6 w-6 text-white" />
				</Button>
			</div>
			<div className="flex space-x-4" ref={parent}>
				{visibleCards}
			</div>
			<div className="flex w-2/12 items-center">
				<Button
					onClick={scrollRight}
					variant="ghost"
					className="absolute -right-10 top-1/2 rounded-full bg-yellow-300 p-1 hover:bg-yellow-500"
				>
					<ChevronRight className="h-6 w-6 text-white" />
				</Button>
			</div>
		</div>
	)
}
