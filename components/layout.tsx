import Head from 'next/head';

export default function Layout({ children, title = 'Montag Book Blog' }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<meta property="og:title" content="Montag Book Blog" />
				<meta
					property="og:description"
					content="Read about the adventures of Montag as he develops his understanding of literature!"
				/>
				<meta
					name="description"
					content="Read about the adventures of Montag as he develops his understanding of literature!"
				/>
				<meta property="og:url" content="https://montagbooks.blog" />
			</Head>
			{children}
		</div>
	);
}
