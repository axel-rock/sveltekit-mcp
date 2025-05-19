# SvelteKit & Vercel MCP Starter

Welcome to this example project demonstrating how to set up and deploy a Model Context Protocol (MCP) server and client using SvelteKit, running on Vercel.

This starter aims to provide a clear, minimal foundation for SvelteKit enthusiasts looking to integrate powerful AI tool-calling capabilities into their applications.

## ✨ Why This Project?

This project was born out of a personal interest in exploring MCP integration with SvelteKit. The recent release of the `@vercel/mcp-adapter` by Vercel significantly lowered the barrier to entry, making this exploration much more approachable – a big thanks to the Vercel team for this!

One of the exciting aspects of this implementation is demonstrating that MCP can be successfully integrated with SvelteKit, even though much of the initial documentation and examples leaned towards Next.js. The adaptation for SvelteKit is quite minimal, showcasing the flexibility of the underlying technologies.

While this example utilizes Vercel's adapter and deployment platform for convenience, it's important to note that the core concepts rely on standard web technologies (HTTP, Server-Sent Events). This means that with some adjustments, similar setups should be achievable on other hosting platforms that support Node.js environments.

This starter aims to be a non-intimidating, minimal example to get you started.

## 🌟 Features

- **`@vercel/mcp-adapter`**: Leveraging Vercel's package for simplified MCP server creation.
- **MCP Server Example**: Demonstrates a basic MCP tool within a SvelteKit route.
- **MCP Client Example**: Shows how to call an MCP server using the [AI SDK](https://ai-sdk.dev/).

Note: Client and Server don't have to be on the same project.

## 🛠️ Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

1.  **Node.js and pnpm**: Ensure you have Node.js (v18 or later recommended) and pnpm installed.
2.  **API Keys**:
    - You'll need an **Anthropic API key** (or an alternative LLM provider key if you adapt the client).
    - A **Redis URL** is required by the `@vercel/mcp-adapter` for certain transports (like SSE) that manage state. Services like [Upstash](https://upstash.com/) offer free tiers. As of `@vercel/mcp-adapter@0.4.1`, the Redis URL is no longer needed when using streamableHTTP.
    - Copy the `.env.example` file to `.env` and fill in your keys:
      ```bash
      cp .env.example .env
      ```

### Installation

Clone the repository and install the dependencies:

```bash
pnpm install
```

### Running Locally

Start the development server:

```bash
pnpm run dev
```

Your application should now be running on `http://localhost:5173` (or the next available port).

## 📝 Key Considerations & Caveats

- **Edge Functions**: As of the initial creation of this example, deploying the MCP server to Vercel Edge Functions might have limitations with the current adapter or SvelteKit integration nuances. Standard serverless functions are the recommended path on Vercel for now.
- **Transport Protocol**: This example primarily demonstrates the `StreamableHTTPClientTransport`. The `@vercel/mcp-adapter` also supports SSE.
- **MCP SDK Version**: The MCP TypeScript SDK is an evolving library. This example uses `"@modelcontextprotocol/sdk": "1.10.2"` due to a previous issue with tool arguments in later versions (see [Issue #467](https://github.com/modelcontextprotocol/typescript-sdk/issues/467)). Always check for the latest stable versions and adapt as needed.

## 🤝 Contributing and Future

This project is intended as a minimal starting point. There are several ways it could be improved or expanded:

- **Flexible Routing for Transports**: Implementing more [dynamic routing](https://svelte.dev/docs/kit/advanced-routing#Matching) to easily switch between or support multiple MCP transports (e.g., SSE alongside HTTP) within the SvelteKit structure.
- **Expanded Tool Examples**: Adding more diverse and complex tool examples.
- **Error Handling and Robustness**: Enhancing error handling on both client and server sides.

**Maintenance Status**: This repository was created to share a working example. While I'll do my best to address critical issues if they arise, I may not be actively maintaining or developing it long-term.

**Contributions are highly welcome!** If you have improvements, bug fixes, or new features, please feel free to open an issue or submit a pull request.

## 📚 Further Reading

- **Vercel MCP Server Support Changelog**: [Read more on Vercel's official announcement](https://vercel.com/changelog/mcp-server-support-on-vercel)
- **SvelteKit Documentation**: [SvelteKit Docs](https://kit.svelte.dev/docs)
- **MCP TypeScript SDK**: [GitHub Repository](https://github.com/modelcontextprotocol/typescript-sdk)
- **`@vercel/mcp-adapter`**: [GitHub Vercel monorepo](https://github.com/vercel/vercel/tree/main/packages/mcp-adapter)

---

Happy coding, and we hope this starter helps you build amazing AI-powered SvelteKit applications!
