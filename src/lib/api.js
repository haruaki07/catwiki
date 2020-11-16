const endpoint = "https://api.thecatapi.com/v1";

async function send({ method, path, data, token }) {
	const fetch = require("node-fetch");
	const HttpsProxyAgent = require("https-proxy-agent");

	const opts = { method, headers: {} };

	if (data) {
		opts.headers["Content-Type"] = "application/json";
		opts.body = JSON.stringify(data);
	}

	if (token) {
		opts.headers["x-api-key"] = `${token}`;
	}

	opts.agent = new HttpsProxyAgent("http://192.168.30.23:8080");

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
