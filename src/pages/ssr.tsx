import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Layout from "../organisms/layout";

interface ErrorType {
	message: string;
}

interface Props {
	data?: Record<string, unknown>;
	error?: ErrorType;
}
const Page: NextPage<Props> = ({ data, error }) => {
	return (
		<Layout>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<h1>Home</h1>
			{error && <div>{error.message}</div>}
			{data && (
				<pre>
					<code>{JSON.stringify(data, null, 4)}</code>
				</pre>
			)}
		</Layout>
	);
};

export default Page;

export const getServerSideProps = async () => {
	try {
		const { data } = await axios.get("https://rickandmortyapi.com/api/character/");
		return {
			props: { data },
		};
	} catch (error) {
		return {
			props: { error: { message: error.message } },
		};
	}
};
