import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Global/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	// lg:row-start-2
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="min-h-screen lg:row-start-2 lg:grid lg:grid-rows-app">
					<Header />
					<main className="">{children}</main>
				</div>
			</body>
		</html>
	)
}
