<script>
	import { fade } from "svelte/transition";
	import { filteredBreeds, searchTerm } from "../stores";
	import { goto } from "@sapper/app";

	let show = false;

	const showModal = () => {
		show = true;
	};

	const closeModal = () => {
		show = false;
	};

	const handleLinkClick = (e) => {
		let url = e.target.getAttribute("href");
		fetch(
			`${process.env.BACKEND_API_URL}/popular/${url.split("/").slice(-1)}`,
			{
				method: "POST",
			}
		).then(async () => {
			show = false;
			searchTerm.set("");
			await goto(url);
		});
	};
</script>

<style lang="postcss">
	.search {
		&-button {
			border-radius: 59px;
			font-size: 12px;
			@apply bg-white py-2 px-4 pr-8 text-primary font-medium w-40 outline-none border-primary border flex justify-between items-center;
		}
		&-modal {
			padding: 0 5%;
			@apply bg-white fixed top-0 left-0 w-full z-10 h-screen;
			@screen md {
				padding: 0 10%;
			}
			.close-button {
				@apply float-right text-primary my-4;
			}
			&-input {
				border-radius: 59px;
				font-size: 12px;
				@apply bg-white py-2 px-4 pr-8 text-primary font-medium w-full outline-none border border-primary;
				@screen md {
					font-size: 18px;
					@apply py-4 px-6 pr-12;
				}
				&::placeholder {
					@apply text-primary font-medium;
				}
			}
			&-list {
				@apply rounded-xl bg-white mt-3 absolute left-0 right-0 p-2;
				.search-modal-list-link,
				li {
					@apply px-4 py-2 font-medium text-primary bg-white rounded-lg block;
					&:hover {
						background: rgba(151, 151, 151, 0.1);
					}
				}
			}
		}
	}
</style>

<div class="search">
	<button class="search-button" on:click={showModal}>
		Search<i class="material-icons">search</i>
	</button>
	{#if show}
		<div class="search-modal" transition:fade={{ duration: 150 }}>
			<button class="close-button" on:click={closeModal}>Close</button>
			<input
				bind:value={$searchTerm}
				class="search-modal-input"
				type="text"
				autocomplete="off"
				placeholder="Search your breed" />
			<div class="search-modal-list">
				<ul class="search-modal-list-scroller">
					{#each $filteredBreeds as breed}
						<a
							href="/breed/{breed.id}"
							class="search-modal-list-link"
							on:click|preventDefault={handleLinkClick}>
							{breed.name}
						</a>
					{:else}
						<li>No Results</li>
					{/each}
				</ul>
			</div>
		</div>
	{/if}
</div>
