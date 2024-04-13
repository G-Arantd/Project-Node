import fastify from "fastify";
import {z} from "zod"

const app = fastify()

app.get("/user/:id", (request, reply) => {

    const validParams = z.object({id: z.string()})
    const paramsValid = validParams.parse(request.params)

    console.log(paramsValid);

    return "Usuario: Ain dudu"

})

app.post("/create/user", (request, reply) => {

    const validParams = z.object({id: z.number(), nome: z.string()})
    const paramsValid = validParams.parse(request.body)
 
    console.log(paramsValid)

    return reply.status(201).send("User created")
})

const port = 3000

app.listen({port}).then(() => {
    console.log(`Server is running in http://localhost:${port}/`)
})