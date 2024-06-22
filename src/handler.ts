import { FastifyReply, FastifyRequest } from "fastify";
import { coffeeDTO, pingDTO } from "./dtos";

export async function handlePing(
  _request: FastifyRequest,
  reply: FastifyReply,
): Promise<pingDTO> {
  reply.code(200);
  return {
    success: true,
    message: "Ping Route Hit",
    data: "pong",
  };
}

export async function handleCoffee(
  _request: FastifyRequest,
  reply: FastifyReply,
): Promise<coffeeDTO> {
  reply.code(200);
  return {
    success: true,
    message: "All Coffees Returned",
    data: [{ name: "Sey Coffee" }],
  };
}
