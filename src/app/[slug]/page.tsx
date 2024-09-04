export default function PageSlug({ params: { slug } }: { params: { slug: string } }) {
	const works = [
		{
			imageSrc: "https://naylawp.pethemes.com/wp-content/uploads/2023/08/ink-sense_24.jpg",
			slug: "ink-sense",
			title: "ink sense",
			description: "web design",
			year: "2023",
		},
		{
			imageSrc: "https://naylawp.pethemes.com/wp-content/uploads/2023/08/curology_featured.jpg",
			slug: "curology",
			title: "curology",
			description: "branding",
			year: "2019",
		},
		{
			imageSrc: "https://naylawp.pethemes.com/wp-content/uploads/2023/08/percent_19.jpg",
			slug: "percent",
			title: "percent",
			description: "ui/ux design",
			year: "2018",
		},
		{
			imageSrc: "https://naylawp.pethemes.com/wp-content/uploads/2023/08/architexture_1-2.jpg",
			slug: "architexture",
			title: "architexture",
			description: "art direction",
			year: "2017",
		},
	]

	const workSelected = works.find((work) => work.slug === slug)

	return (
		<main className="flex h-screen flex-col gap-6 bg-zinc-700">
			<h1 className="animate-pulse text-8xl uppercase text-zinc-50">{workSelected?.title}</h1>
			<img className="h-96 w-full object-cover" src={workSelected?.imageSrc} alt={workSelected?.title} />
		</main>
	)
}
