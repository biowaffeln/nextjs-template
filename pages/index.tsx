import { Nav } from "@components/nav";
import { SEO } from "@components/seo";
import { FC } from "react";

const Home: FC = () => (
	<>
		<SEO title="Home" description="Home page of Mark's Next.js template." />
		<Nav />
		<div className="py-20 lg:py-32 text-center container">
			<p className="text-xl lg:text-2xl tracking-wide text-gray-900 mb-3">
				welcome to Mark's
			</p>
			<h1 className="text-4xl lg:text-huge font-semibold tracking-tighter mb-8">
				Next.js Template
			</h1>
			<button className="px-4 py-2 bg-indigo-600 tracking-wider shadow-lg text-white text-lg rounded font-medium focus:outline-black mb-16">
				clone on github
			</button>
			<ul className="text-lg lg:text-xl text-indigo-600 mb-6">
				<li>TypeScript</li>
				<li>Tailwind CSS</li>
				<li>an SEO Component</li>
				<li>custom font &amp; theme</li>
				<li>pnpm</li>
			</ul>
		</div>
	</>
);
export default Home;
