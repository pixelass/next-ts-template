import React, { HTMLAttributes } from "react";
import StyledButton from "./styled";

/**
 *
 * @param {React.ReactNode} children
 * @param {React.HTMLAttributes<HTMLButtonElement>} props
 * @return {JSX.Element}
 * @constructor
 */
const Button = ({ children, ...props }: HTMLAttributes<HTMLButtonElement>) => {
	return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
