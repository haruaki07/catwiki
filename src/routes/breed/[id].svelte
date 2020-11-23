<script context="module">
	export async function preload({ params: { id } }) {
		let res = await this.fetch(`${process.env.BACKEND_API_URL}/breed/${id}`);
		res = await res.json();

		if (res.code === 200) {
			return { breed: res.data };
		} else {
			this.error(res.code, res.message);
		}
	}
</script>

<script>
	import Gallery from "../../components/Gallery.svelte";
	import Rating from "../../components/Rating.svelte";
	import Img from "../../components/Img.svelte";

	export let breed = {};
</script>

<style lang="postcss">
	.title,
	.name {
		font-size: 36px;
		@apply text-primary font-semibold mb-6;
	}
	.breed {
		@apply flex flex-col justify-center py-5;
		@screen md {
			@apply flex-row px-16 py-10;
		}
		&-img {
			@apply flex-shrink-0 mb-5;
		}
		&-details {
			@screen md {
				@apply ml-20;
			}
			.description {
				@apply font-medium text-primary mb-6;
				@screen md {
					font-size: 18px;
				}
			}
			.detail {
				@apply flex flex-col py-3;
				@screen md {
					@apply flex-row items-center;
				}
				&-key {
					@apply font-bold text-primary mr-2;
				}
				&-value {
					@apply font-medium;
				}
				&:not(.text) {
					.detail-key {
						width: 170px;
					}
				}
			}
		}
	}
</style>

<svelte:head>
	<title>{breed.name} - CatWiki</title>
</svelte:head>

<div class="breed">
	<div class="breed-img">
		<Img src={breed.url} />
	</div>
	<div class="breed-details">
		<h1 class="name">{breed.name}</h1>
		<p class="description">{breed.description}</p>
		<div class="detail text">
			<h3 class="detail-key">Temperament:</h3>
			<p class="detail-value">{breed.temperament}</p>
		</div>
		<div class="detail text">
			<h3 class="detail-key">Origin:</h3>
			<p class="detail-value">{breed.origin}</p>
		</div>
		<div class="detail text">
			<h3 class="detail-key">Life Span:</h3>
			<p class="detail-value">{breed.life_span} years</p>
		</div>
		<div class="detail">
			<h3 class="detail-key">Adaptability:</h3>
			<Rating value={breed.adaptability} />
		</div>
		<div class="detail">
			<h3 class="detail-key">Affection level:</h3>
			<Rating value={breed.affection_level} />
		</div>
		<div class="detail">
			<h3 class="detail-key">Child Friendly:</h3>
			<Rating value={breed.child_friendly} />
		</div>
		<div class="detail">
			<h3 class="detail-key">Grooming:</h3>
			<Rating value={breed.grooming} />
		</div>
		<div class="detail">
			<h3 class="detail-key">Intelligence:</h3>
			<Rating value={breed.intelligence} />
		</div>
		<div class="detail">
			<h3 class="detail-key">Health issues:</h3>
			<Rating value={breed.health_issues} />
		</div>
		<div class="detail">
			<h3 class="detail-key">Social needs:</h3>
			<Rating value={breed.social_needs} />
		</div>
		<div class="detail">
			<h3 class="detail-key">Stranger friendly:</h3>
			<Rating value={breed.stranger_friendly} />
		</div>
	</div>
</div>

<h1 class="title">Other photos</h1>

<Gallery data={breed.images} />
