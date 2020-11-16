import { Router } from "express";
const router = Router();

import { get } from "./../lib/api";
import "./db";
import Search from "./models/Search";

const token = process.env.CAT_API_KEY;

router.get("/breeds", async (req, res) => {
	try {
		let data = await get("breeds", token);
		data = data.map(({ id, name }) => ({ id, name }));
		res.status(200).json({ code: 200, message: "success", data });
	} catch (err) {
		console.log(err);
		res.status(500).json({ code: 500, message: "error" });
	}
});

router.get("/breeds", async (req, res) => {
	try {
		const { breed_id } = req.query;
		let data = await get(`images/search?breed_id=${breed_id}`, token);
		let images = await get(`images/search?breed_id=${breed_id}&limit=8`, token);

		images = images.map(({ url }) => url);
		data = data.map(({ url, breeds }) => ({ url, ...breeds[0], images }))[0];

		res.status(200).json({ code: 200, message: "success", data });
	} catch (err) {
		console.log(err);
		res.status(500).json({ code: 500, message: "error" });
	}
});

router.get("/breeds/popular", async (req, res) => {
	try {
		const data = await Search.find({}).limit(10).sort({ views: -1 });
		res.status(200).json({ code: 200, message: "success", data });
	} catch (err) {
		console.log(err);
		res.status(500).json({ code: 500, message: "error" });
	}
});

router.post("/breeds/popular/:breed_id", async (req, res) => {
	try {
		const { breed_id } = req.params;
		const search = await Search.findOne({ breed_id });
		if (!search) {
			const data = await get(`images/search?breed_id=${breed_id}`, token);
			const newSearch = await Search.create({
				breed_id,
				name: data[0].breeds[0].name,
				description: data[0].breeds[0].description,
				image: data[0].url,
				views: 1,
			});
			res.status(200).json({ code: 200, message: "success", data: newSearch });
		}
		search.views++;
		search.save();
		res.status(200).json({ code: 200, message: "success", data: search });
	} catch (err) {
		console.log(err);
		res.status(500).json({ code: 500, message: "error" });
	}
});

export default router;
