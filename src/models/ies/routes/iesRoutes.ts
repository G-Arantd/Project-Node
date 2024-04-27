import { iesControllers } from "../controllers/IesControllers"
import { FastifyInstance, RouteShorthandOptions } from "fastify";

export const iesRoutes = (
    fastify: FastifyInstance,
    options: RouteShorthandOptions,
    done: () => void
) => {
    fastify.register(iesControllers)
    done();
}
