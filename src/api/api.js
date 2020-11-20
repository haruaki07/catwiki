const endpoint = process.env.CAT_API_URL;

async function send({ method, path, data, token }) {
	const fetch = require("node-fetch");

	const opts = { method, headers: {} };

	if (data) {
		opts.headers["Content-Type"] = "application/json";
		opts.body = JSON.stringify(data);
	}

	if (token) {
		opts.headers["x-api-key"] = `${token}`;
	}

	return fetch(`${endpoint}/${path}`, opts)
		.then((r) => r.text())
		.then((json) => {
			try {
				return JSON.parse(json);
			} catch (err) {
				return json;
			}
		});
}

export function get(path, token) {
	return send({ method: "GET", path, token });
}

export function post(path, data, token) {
	return send({ method: "POST", path, data, token });
}
