import fastify, { FastifyInstance } from "fastify";

const server = fastify({ logger: true });

server.get("/ping", async (_request, _reply) => {
  return "pong\n";
});

async function startServer(server: FastifyInstance) {
  await server.listen({ port: 3000 });
  server.log.info("Server Started");
}

startServer(server);
