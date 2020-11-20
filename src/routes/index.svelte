<script context="module">
	export async function preload() {
		let resBreeds = await this.fetch(`${process.env.BACKEND_API_URL}/breed`);
		resBreeds = await resBreeds.json();

		let resPopulars = await this.fetch(
			`${process.env.BACKEND_API_URL}/popular`
		);
		resPopulars = await resPopulars.json();

		if (resBreeds.data && resPopulars.data) {
			return { breeds: resBreeds.data, populars: resPopulars.data };
		} else {
			this.error(500, "Error while fetching data");
		}
	}
</script>

<script>
	import Hero from "../components/Hero.svelte";
	import Section from "../components/Section.svelte";
	import { breeds as storeBreeds, popularBreeds } from "../stores";

	export let breeds = [];
	export let populars = [];

	$: storeBreeds.set(breeds), popularBreeds.set(populars);
</script>

<style lang="postcss">
</style>

<svelte:head>
	<title>CatWiki</title>
</svelte:head>

<Hero />
<Section />
