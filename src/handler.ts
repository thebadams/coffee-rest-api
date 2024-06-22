import { FastifyReply, FastifyRequest } from "fastify";

export async function handlePing(
  _request: FastifyRequest,
  _reply: FastifyReply,
) {
  return "pong\n";
}
