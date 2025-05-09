# SvelteKit & Vercel MCP Starter

Welcome to this example project demonstrating how to set up and deploy a Model Context Protocol (MCP) server and client using SvelteKit, running on Vercel.

This starter aims to provide a clear, minimal foundation for SvelteKit enthusiasts looking to integrate powerful AI tool-calling capabilities into their applications.

## ✨ Why This Project?

This project was born out of a personal interest in exploring MCP integration with SvelteKit. The recent release of the `@vercel/mcp-adapter` by Vercel significantly lowered the barrier to entry, making this exploration much more approachable – a big thanks to the Vercel team for this!

One of the exciting aspects of this implementation is demonstrating that MCP can be successfully integrated with SvelteKit, even though much of the initial documentation and examples leaned towards Next.js. The adaptation for SvelteKit is quite minimal, showcasing the flexibility of the underlying technologies.

While this example utilizes Vercel's adapter and deployment platform for convenience, it's important to note that the core concepts rely on standard web technologies (HTTP, Server-Sent Events). This means that with some adjustments, similar setups should be achievable on other hosting platforms that support Node.js environments.

This starter aims to be a non-intimidating, minimal example to get you started.

## 🌟 Features

*   **SvelteKit**: The fast, modern, and enjoyable full-stack framework.
*   **Vercel Deployment**: Optimized for Vercel's infrastructure, including support for serverless functions.
*   **`@vercel/mcp-adapter`**: Leveraging Vercel's package for simplified MCP server creation.
*   **MCP Server Example**: Demonstrates a basic MCP tool within a SvelteKit route.
*   **MCP Client Example**: Shows how to call an MCP server from a SvelteKit frontend (initially in `+page.svelte`, to be minimized).
*   **TypeScript**: For robust and maintainable code.

## 🛠️ Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

1.  **Node.js and pnpm**: Ensure you have Node.js (v18 or later recommended) and pnpm installed.
2.  **Vercel Account**: For deployment (optional for local development, especially if you adapt it for other platforms).
3.  **API Keys**:
    *   You'll need an **Anthropic API key** (or an alternative LLM provider key if you adapt the client).
    *   A **Redis URL** is required by the `@vercel/mcp-adapter` for certain transports (like SSE) that manage state. Services like [Upstash](https://upstash.com/) offer free tiers.
    *   Copy the `.env.example` file to `.env` and fill in your keys:
        ```bash
        cp .env.example .env
        ```

### Installation

Clone the repository and install the dependencies:

```bash
git clone <your-repo-url> sveltekit-mcp-starter
cd sveltekit-mcp-starter
pnpm install
```

### Running Locally

Start the development server:

```bash
pnpm run dev
```

Your application should now be running on `http://localhost:5173` (or the next available port).

## 🧠 Understanding MCP

Model Context Protocol (MCP) is designed to enable AI models to interact with external tools and services. Think of it not just as another API, but as a tailored toolkit that an AI can use to perform specific tasks. A single MCP tool might internally use multiple APIs or complex business logic.

Vercel has introduced support for deploying MCP servers, utilizing the `@vercel/mcp-adapter` package. This adapter supports both the older stateful SSE (Server-Sent Events) transport and the newer stateless HTTP transport.

> **From Vercel's Changelog:**
> "Rather than thinking about MCP like a REST API, you can instead think about it like a tailored toolkit that helps an AI achieve a particular task. There may be multiple APIs and other business logic used behind the scenes for a single MCP tool."

## 📝 Key Considerations & Caveats

*   **Edge Functions**: As of the initial creation of this example, deploying the MCP server to Vercel Edge Functions might have limitations with the current adapter or SvelteKit integration nuances. Standard serverless functions are the recommended path on Vercel for now.
*   **Transport Protocol**: This example primarily demonstrates the `StreamableHTTPClientTransport`. The `@vercel/mcp-adapter` also supports SSE. If you explore SSE, ensure your Redis setup is correctly configured as it's used for state management by the adapter.
*   **MCP SDK Version**: The MCP TypeScript SDK is an evolving library. This example uses `"@modelcontextprotocol/sdk": "1.10.2"` due to a previous issue with tool arguments in later versions (see [Issue #467](https://github.com/modelcontextprotocol/typescript-sdk/issues/467)). Always check for the latest stable versions and adapt as needed.

## 🚀 Deploying to Vercel

Deploying this SvelteKit application to Vercel is straightforward:

1.  Connect your Git repository to Vercel.
2.  Configure your environment variables (like `ANTHROPIC_API_KEY` and `REDIS_URL`) in the Vercel project settings.
3.  Vercel will automatically detect it's a SvelteKit project and build and deploy it.

Ensure your `vercel.json` is configured appropriately if you have specific needs for function regions or memory.

## 🤝 Contributing and Future

This project is intended as a minimal starting point. There are several ways it could be improved or expanded:

*   **Flexible Routing for Transports**: Implementing more [dynamic routing](https://svelte.dev/docs/kit/advanced-routing#Matching) to easily switch between or support multiple MCP transports (e.g., SSE alongside HTTP) within the SvelteKit structure.
*   **Expanded Tool Examples**: Adding more diverse and complex tool examples.
*   **Error Handling and Robustness**: Enhancing error handling on both client and server sides.

**Maintenance Status**: This repository was created to share a working example. While I'll do my best to address critical issues if they arise, I may not be actively maintaining or developing it long-term. 

**Contributions are highly welcome!** If you have improvements, bug fixes, or new features, please feel free to open an issue or submit a pull request.

## 📚 Further Reading

*   **Vercel MCP Server Support Changelog**: [Read more on Vercel's official announcement](https://vercel.com/changelog/mcp-server-support-on-vercel)
*   **SvelteKit Documentation**: [SvelteKit Docs](https://kit.svelte.dev/docs)
*   **MCP TypeScript SDK**: [GitHub Repository](https://github.com/modelcontextprotocol/typescript-sdk)
*   **`@vercel/mcp-adapter`**: While not extensively documented separately, usage can be inferred from the changelog and Next.js examples.

## 🧹 Minimal Example Focus

The `src/routes/+page.svelte` file initially contains a client-side example of interacting with the MCP server. This will eventually be streamlined or moved to a more dedicated example section to keep the core project structure as close as possible to a default SvelteKit setup, focusing primarily on the MCP server integration within SvelteKit routes.

---

Happy coding, and we hope this starter helps you build amazing AI-powered SvelteKit applications!
