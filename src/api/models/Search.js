import { Schema, model } from "mongoose";

const searchSchema = new Schema({
	breed_id: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	views: {
		type: Number,
		required: true,
	},
});

export default model("Search", searchSchema);
