import sirv from "sirv";
import express from "express";
import "dotenv/config";
import compression from "compression";
import * as sapper from "@sapper/server";
import apiRoutes from "./api/routes";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const app = express(); // You can also use Polka

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

app.use(
	compression({ threshold: 0 }),
	sirv("static", { dev }),
	sapper.middleware()
);

app.listen(PORT, (err) => {
	if (err) console.log("error", err);
});

export default app;
