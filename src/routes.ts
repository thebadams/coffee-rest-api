import { FastifyInstance } from "fastify";
import { handlePing } from "./handler";

export function registerRoutes(server: FastifyInstance): FastifyInstance {
  server.route({ url: "/ping", method: "GET", handler: handlePing });
  return server;
}
