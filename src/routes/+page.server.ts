import { createAnthropic } from '@ai-sdk/anthropic'
import { PRIVATE_ANTHROPIC_KEY } from '$env/static/private'
import { experimental_createMCPClient, generateText, streamText } from 'ai'
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js'

const anthropic = createAnthropic({ apiKey: PRIVATE_ANTHROPIC_KEY })
const model = anthropic('claude-3-7-sonnet-20250219')

export const actions = {
	mcp: async ({ request }) => {
		console.log('MCP')
		const formData = await request.formData()
		const prompt = formData.get('prompt') as string
		const transport = new StreamableHTTPClientTransport(new URL('http://localhost:5173/mcp'))
		const customClient = await experimental_createMCPClient({
			transport,
		})
		const tools = await customClient.tools()
		console.dir(tools, { depth: null })

		const gen = await generateText({
			model,
			prompt,
			tools,
			maxSteps: 3,
		})

		return {
			gen: JSON.parse(JSON.stringify(gen)),
		}
	}
}
