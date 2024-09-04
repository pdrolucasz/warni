import { ComponentProps, FC } from "react"
import { twMerge } from "tailwind-merge"

interface InputPrefixProps extends ComponentProps<"div"> {}

export const Prefix: FC<InputPrefixProps> = (props) => {
	return <div {...props} />
}

interface InputControlProps extends ComponentProps<"input"> {}

export const Control: FC<InputControlProps> = (props) => {
	return (
		<input
			type="text"
			className="flex-1 border-0 bg-transparent p-0 text-zinc-50 placeholder-zinc-300 outline-none"
			{...props}
		/>
	)
}

interface InputRootProps extends ComponentProps<"div"> {}

export const Root: FC<InputRootProps> = (props) => {
	return (
		<div
			className={twMerge(
				"flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm",
				"focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100",
				props.className,
			)}
			{...props}
		/>
	)
}
