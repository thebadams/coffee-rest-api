import fastify from "fastify";
import { registerRoutes } from "./routes";

const server = fastify({ logger: true });

export default server;
