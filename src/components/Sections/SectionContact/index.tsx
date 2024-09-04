import { FC } from "react"

import * as Input from "@/components/Global/Form/Input"
import { Button } from "@/components/Global/Buttons/Button"

export const SectionContact: FC = () => {
	return (
		<section className="flex flex-col gap-6 bg-zinc-700 p-6 text-zinc-50 lg:grid lg:grid-cols-2 lg:place-items-center lg:p-0 lg:pb-6">
			<div className="flex flex-col gap-6">
				<h1 className="text-2xl lg:text-4xl">Quer entrar em contato?</h1>
				<div>
					<p>
						<span className="font-bold">Nome: </span>Warni
					</p>
					<p>
						<span className="font-bold">Endereço: </span>São Paulo, BRA
					</p>
					<p>
						<span className="font-bold">Telefone: </span>(11) 9 9999-9999
					</p>
				</div>
			</div>
			<div className="lg:flex lg:justify-center lg:justify-self-stretch">
				<div className="flex w-full max-w-full flex-col gap-6 lg:max-w-[20vw]">
					<Input.Root>
						<Input.Control id="name" placeholder="Nome" />
					</Input.Root>
					<Input.Root>
						<Input.Control id="email" placeholder="E-mail" type="email" />
					</Input.Root>
					<Button variant="outline">Enviar</Button>
				</div>
			</div>
		</section>
	)
}
