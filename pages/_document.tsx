import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body className="bg-gray-100">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default Document;
