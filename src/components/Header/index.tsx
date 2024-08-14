import { FC } from "react"

import { Menu } from "lucide-react"

import * as Collapsible from "@radix-ui/react-collapsible"

import { NavItem } from "./NavItem"
import { Button } from "../Buttons/Button"

export const Header: FC = () => {
	return (
		<Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 p-4 data-[state=open]:bottom-0 lg:flex-row lg:justify-around">
			<div className="flex items-center justify-between">
				<h1 className="font-serif text-2xl font-bold text-zinc-600">
					<span className="text-yellow-400">WAR</span>NI
				</h1>
				<Collapsible.Trigger asChild className="lg:hidden">
					<Button variant="ghost">
						<Menu className="h-6 w-6" />
					</Button>
				</Collapsible.Trigger>
			</div>
			<Collapsible.Content
				forceMount
				className="flex flex-col gap-6 data-[state=closed]:hidden data-[state=open]:rounded-lg data-[state=open]:bg-white lg:flex-row lg:data-[state=closed]:flex lg:data-[state=open]:bg-inherit"
			>
				<nav className="flex flex-1 flex-col space-y-0.5 lg:flex-row">
					<NavItem title="Nossa história" />
					<NavItem title="Serviços" />
					<NavItem title="Planos" />
					<NavItem title="Entre em contato" />
				</nav>
			</Collapsible.Content>
		</Collapsible.Root>
	)
}
