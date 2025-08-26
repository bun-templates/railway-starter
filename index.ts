import index from './index.html';

const server = Bun.serve({
	routes: {
		"/": index,
		"/welcome": new Response("Welcome to Bun on Railway!"),
	}
})

console.log(`🚀 Server running at ${server.url}`);