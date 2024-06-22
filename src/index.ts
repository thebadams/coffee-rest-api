import { FastifyInstance } from "fastify";
import server from "./server";
import { registerRoutes } from "./routes";

async function startServer(server: FastifyInstance) {
  registerRoutes(server);
  await server.listen({ port: 3000 });
  server.log.info("Server Started");
}

startServer(server);
