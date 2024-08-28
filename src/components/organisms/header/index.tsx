import { Link } from "@/components/atoms/link";
import { css } from "./index.css";
import { SITE_ORIGIN } from "@/config";

export const Header = () => (
	<header>
		<h1 className={css}><Link to={new URL('/', SITE_ORIGIN)} noStyle={true}>🌊 おみつ雑記</Link></h1>
	</header>
);
