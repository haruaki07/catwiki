<script>
	import { fly } from "svelte/transition";
	import { onMount } from "svelte";
	import { filteredBreeds, searchTerm } from "../stores";
	import { goto } from "@sapper/app";

	let searchEl = null;
	let listOpen = false;

	onMount(() => {
		if (!searchEl) searchEl = document.querySelector(".search");

		const handleOutsideClick = (e) => {
			if (listOpen && !searchEl.contains(e.target)) {
				listOpen = false;
				searchTerm.set("");
			} else if (e.target.classList.contains("search-list-link")) {
				e.preventDefault();
				let url = e.target.getAttribute("href");
				fetch(
					`${process.env.BACKEND_API_URL}/popular/${url.split("/").slice(-1)}`,
					{
						method: "POST",
					}
				).then(async () => {
					searchTerm.set("");
					listOpen = false;
					await goto(url);
				});
			}
		};

		document.addEventListener("click", handleOutsideClick);

		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	});
</script>

<style lang="postcss">
	.search {
		@apply relative;
		&-input {
			border-radius: 59px;
			font-size: 12px;
			@apply bg-white py-2 px-4 pr-8 text-primary font-medium w-full outline-none;
			@screen md {
				font-size: 18px;
				@apply py-4 px-6 pr-12;
			}
			&::placeholder {
				@apply text-primary font-medium;
			}
		}
		.icon {
			top: 7px;
			right: 8px;
			font-size: 1.25rem;
			@apply absolute text-primary select-none;
			@screen md {
				top: 16px;
				right: 18px;
				font-size: 24px;
			}
		}
		&-list {
			@apply rounded-xl bg-white mt-3 absolute left-0 right-0 p-2;
			.search-list-link,
			li {
				font-size: 18px;
				@apply p-4 font-medium text-primary bg-white rounded-xl block;
				&:hover {
					background: rgba(151, 151, 151, 0.1);
				}
			}
			&-scroller {
				max-height: 220px;
				scrollbar-width: thin;
				scrollbar-color: #bdbdbd #f2f2f2;
				@apply overflow-y-auto pr-2;
				&::-webkit-scrollbar {
					width: 4px;
				}
				&::-webkit-scrollbar-track {
					background: #f2f2f2;
					border-radius: 24px;
				}
				&::-webkit-scrollbar-thumb {
					border-radius: 24px;
					background-color: #bdbdbd;
				}
			}
		}
	}
</style>

<div class="search" bind:this={searchEl}>
	<input
		id="query"
		bind:value={$searchTerm}
		type="text"
		class="search-input"
		placeholder="Search"
		autocomplete="off"
		on:focus={() => (listOpen = true)} />
	<label for="query" class="material-icons icon">search</label>
	{#if listOpen}
		<div class="search-list" transition:fly={{ duration: 200, y: -32 }}>
			<ul class="search-list-scroller">
				{#each $filteredBreeds as breed}
					<a href="/breed/{breed.id}" class="search-list-link">
						{breed.name}
					</a>
				{:else}
					<li>No Results</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
