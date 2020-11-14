import { config } from "./site.config";
import Link from "next/link";

export const Nav = () => (
	<header className="py-8">
		<div className="container-center flex justify-between items-center">
			<h2 className="font-semibold text-xl">{config.title}</h2>
			<nav>
				<Link href="/">
					<a className="text-lg lg:text-xl ml-1 px-2 focus:outline-black">
						home
					</a>
				</Link>
				<Link href="/">
					<a className="text-lg lg:text-xl ml-1 px-2 focus:outline-black">
						about
					</a>
				</Link>
			</nav>
		</div>
	</header>
);
