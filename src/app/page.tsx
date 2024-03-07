import { HeroForm } from "@/components/form";

const Home = () => {
	return (
		<section className="container mt-10 flex flex-col items-center gap-3 text-center md:absolute md:left-1/2 md:top-1/2 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2">
			<h1 className="mb-1 font-mono text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
				Coliving Semkovo
			</h1>
			<p className="text-muted-foreground max-w-2xl">
				Coliving Semkovo, located in the Bulgarian countryside, features 100
				private apartments within a 16,700 square meter complex, tailored for
				remote workers who value both productivity and a fulfilling lifestyle.
			</p>
			<p className="text-muted-foreground max-w-2xl">
				Situated in Semkovo, this coliving space offers an ideal setting for
				focused work, complemented by opportunities for making connections and
				building friendships in its expansive communal areas. Along with
				fostering a sense of community, it also provides skiing and other
				outdoor activities, creating a harmonious balance of work, social life,
				and leisure.
			</p>
			<div className="mt-1">
				<HeroForm />
			</div>
		</section>
	);
};

export default Home;
