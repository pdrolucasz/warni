// "use client"

// import { useState, useEffect, useRef } from "react"

// function HeroSection() {
// 	const [isAnimated, setIsAnimated] = useState(false)
// 	const textRef = useRef(null)

// 	useEffect(() => {
// 		const textElement = textRef.current
// 		const handleScroll = () => {
// 			const rect = textElement.getBoundingClientRect()
// 			const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight

// 			// Calcular o fator de escala com base na posição do elemento
// 			const maxScale = 2.5 // Ajuste este valor para controlar o tamanho máximo inicial
// 			const scale = Math.max(1, maxScale - (1 - rect.top / window.innerHeight) * maxScale)

// 			setIsAnimated(isVisible)
// 			textElement.style.transform = `scale(${scale})`
// 		}

// 		window.addEventListener("scroll", handleScroll)
// 		return () => window.removeEventListener("scroll", handleScroll)
// 	}, [])

// 	return (
// 		<section className="flex min-h-screen items-center justify-center overflow-hidden bg-yellow-300 uppercase text-zinc-50">
// 			<h1 ref={textRef} className="max-w-full whitespace-normal break-words text-center text-9xl">
// 				Ações estratégicas para alcançar os objetivos do seu negócio
// 			</h1>
// 		</section>
// 	)
// }

// export default HeroSection
