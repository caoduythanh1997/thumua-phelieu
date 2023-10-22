export const RequestPost = async (url, param) => {
	var requestOption = {
		method: 'POST',
		body: param,
		redirect: 'follow',
	};
	const res = await fetch(url, requestOption);
	const dt = await res.json();
	return dt;
};
