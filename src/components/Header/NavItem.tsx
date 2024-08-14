import Link from "next/link"
import { FC } from "react"

interface NavItemProps {
	title: string
}

export const NavItem: FC<NavItemProps> = ({ title }) => {
	return (
		<Link href="" className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-yellow-50">
			<span className="font-medium text-zinc-700 group-hover:text-yellow-500">{title}</span>
		</Link>
	)
}
