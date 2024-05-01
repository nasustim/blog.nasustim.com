import "@/styles/global.css";
import { Header } from "@/components/organisms/header";
import { type FC, type ReactNode } from "react";
import { Footer } from "@/components/organisms/footer";

type Props = {
	children: ReactNode;
	title: string;
	canonicalUrl: string;
	generator: string;
};
export const BaseLayout: FC<Props> = ({
	title,
	canonicalUrl,
	children,
	generator,
}) => (
	<html lang="ja">
		<head>
			{/* Global metadata */}
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width,initial-scale=1" />
			<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
			<meta name="generator" content={generator} />

			{/* Font preload  */}
			<link
				rel="preload"
				href="/fonts/atkinson-regular.woff"
				as="font"
				type="font/woff"
			/>
			<link
				rel="preload"
				href="/fonts/atkinson-bold.woff"
				as="font"
				type="font/woff"
			/>

			{/* Canonical URL */}
			<link rel="canonical" href={canonicalUrl} />

			{/* Primary meta tags */}
			<title>{title}</title>
			<meta name="title" content={title} />

			{/* OGP */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={canonicalUrl} />
			<meta property="og:title" content={title} />

			{/* X (formaly Twitter) */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={canonicalUrl} />
			<meta property="twitter:title" content={title} />
		</head>
		<body>
			<Header />
			<main>{children}</main>
			<Footer />
		</body>
	</html>
);
