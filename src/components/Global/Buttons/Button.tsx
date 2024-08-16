import { ComponentProps, FC } from "react"

import { tv, VariantProps } from "tailwind-variants"

const button = tv({
	base: [
		"rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm",
		"focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-500",
		"active:opacity-80",
	],
	variants: {
		variant: {
			ghost: "rounded-md px-2 hover:bg-zinc-50 shadow-none text-zinc-500 ",
		},
	},
	defaultVariants: {
		variant: "ghost",
	},
})

interface ButtonProps extends ComponentProps<"button">, VariantProps<typeof button> {}

export const Button: FC<ButtonProps> = ({ variant, className, ...props }) => {
	return <button {...props} className={button({ variant, className })} />
}
