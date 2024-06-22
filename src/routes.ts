import { FastifyInstance } from "fastify";
import { handleCoffee, handlePing } from "./handler";

export function registerRoutes(server: FastifyInstance): FastifyInstance {
  server.route({ url: "/ping", method: "GET", handler: handlePing });
  server.log.info("GET /ping Registered");
  server.route({ url: "/coffee", method: "GET", handler: handleCoffee });
  server.log.info("GET /coffee Registered");
  return server;
}
