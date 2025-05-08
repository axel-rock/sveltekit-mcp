# SvelteKit | Vercel MCP

How to run a MCP server, and/or client, using Vercel and the AI SDK

## Developing

You need an anthropic API and a Redis URL key to test this project.

Expected keys are visible in .env.example

```bash
pnpm run dev
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Status

This project is work in progress, currently, arguments are not passed between client and server
