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

<h1>MCP</h1>

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
	<input type="text" name="prompt" id="prompt" bind:value={prompt} placeholder="Prompt" />
	<button type="submit">Submit</button>
</form>

<pre>{output}</pre>
