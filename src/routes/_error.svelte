<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === "development";
</script>

<style lang="postcss">
	.error {
		@apply flex items-center justify-center h-full;
		&-code {
			font-size: 26px;
			padding: 0 15px 0 15px;
			@apply text-center border-primary border-r-2;
		}
		&-message {
			font-size: 18px;
			@apply text-center;
		}
		&-stack {
			@apply flex-none;
		}
	}
</style>

<div class="error">
	<div class="error-code">{status}</div>
	<div class="error-message" style="padding: 10px;">{error.message}</div>
	{#if dev && error.stack}
		<pre class="error-stack">{error.stack}</pre>
	{/if}
</div>
