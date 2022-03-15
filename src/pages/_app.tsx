import React from "react";
import { globalStyle } from "@/ions/styles";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			{globalStyle}
			<Component {...pageProps} />
		</>
	);
};

export default App;
