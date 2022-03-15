import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface State<T = Record<string, unknown>> {
	data: null | T;
	loading: boolean;
	error: null | AxiosError;
}
const useGet = <T>(url: string) => {
	const [state, setState] = useState<State<T>>({
		data: null,
		loading: false,
		error: null,
	});
	useEffect(() => {
		setState(({ data }) => ({
			data,
			error: null,
			loading: true,
		}));
		axios
			.get(url)
			.then(({ data }) => {
				setState({
					error: null,
					data,
					loading: false,
				});
			})
			.catch((error: unknown) => {
				setState(({ data }) => ({
					data,
					error: error as AxiosError,
					loading: false,
				}));
			});
	}, [url]);
	return state;
};

export default useGet;
