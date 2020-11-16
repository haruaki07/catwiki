import { connect } from "mongoose";

(async () => {
	try {
		connect(
			process.env.MONGO_URL,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
			},
			(err) => console.log("\x1b[32m\x1b[1m%s\x1b[0m", "✔ mongodb connected")
		);
	} catch (e) {
		console.log(e);
		throw e;
	}
})();
