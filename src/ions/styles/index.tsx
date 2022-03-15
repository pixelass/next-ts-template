import React from "react";
import { css, Global } from "@emotion/react";

export const globalStyle = (
	<Global
		styles={css`
			*,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			html {
				font-size: 16px;
			}

			body {
				margin: 0;
				font-size: 1rem;
			}
		`}
	/>
);
