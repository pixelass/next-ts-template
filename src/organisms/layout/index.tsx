import React, { ReactNode } from "react";
import Footer from "../footer";
import Header from "../header";

interface Props {
	children?: ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
