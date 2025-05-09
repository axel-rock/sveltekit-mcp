<script lang="ts">
	import { enhance } from '$app/forms'
	import { page } from '$app/state'
	import { onMount } from 'svelte'
	import type { PageData } from './$types'

	let { data }: { data: PageData } = $props()

	let prompt = $state<string | null>('')
	let output = $state('')

	$effect(() => {
		if (prompt) localStorage.setItem('playground-prompt', prompt)
	})

	onMount(() => {
		prompt = localStorage.getItem('playground-prompt')
	})
</script>

<header>
	<h1>SvelteKit & Vercel MCP Starter</h1>
	<nav>
		<a href="https://github.com/axel-rock/sveltekit-mcp-starter" target="_blank">GitHub</a>
	</nav>
</header>

<main>
	
	<form
		method="post"
		action="?/mcp"
		use:enhance={() => {
			return async ({ result }) => {
				// @ts-expect-error
				console.log(result.data?.gen)
				// @ts-expect-error
				output = result.data?.gen.text
			}
		}}
	>
	<p>Type in a prompt. Ask for a roll of dice to trigger the demo MCP tool.</p>

	<label for="prompt">Prompt:</label>
	<input type="text" name="prompt" id="prompt" bind:value={prompt} placeholder="Roll a 6 face dice" />
		<button type="submit">Submit</button>
	</form>
	
	Output:
	<pre>{output}</pre>
</main>

<style>
	:global(body) {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-optical-sizing: auto;
	}

	main, header {
		max-width: 80ch;
		margin: 0 auto;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	pre {
		white-space: pre-wrap;
		word-wrap: break-word;
		max-width: 100%;
	}
</style>