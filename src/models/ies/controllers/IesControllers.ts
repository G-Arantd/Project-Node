import { FastifyInstance, RouteShorthandOptions } from "fastify";
import { SaveIesUseCase } from "../domain/useCase/SaveIesUseCase";
import { IesRepository } from "../data/repository/IesRepository";
import { IesCreateDto, IesUpdateDto } from "../data/entity/Ies";
import { FindIesCnpjUseCase } from "../domain/useCase/FindIesCnpjUseCase";
import { UpdateIesUseCase } from "../domain/useCase/UpdateIesUseCase";
import { DeleteIesUseCase } from "../domain/useCase/DeleteIesUseCase";
import { UUID } from "crypto";

export const iesControllers = (
    fastify: FastifyInstance,
    options: RouteShorthandOptions,
    done: () => void
) => {

    const iesRepository = new IesRepository();
    const saveIesUseCase = new SaveIesUseCase(iesRepository);
    const findIesCnpjUseCase = new FindIesCnpjUseCase(iesRepository);
    const updateIesUseCase = new UpdateIesUseCase(iesRepository);
    const deleteIesUseCase = new DeleteIesUseCase(iesRepository);

    fastify.post("/save-ies", async (request, reply) => {

        try {

            const ies = await saveIesUseCase.execute(request.body as IesCreateDto);
            reply.code(201).send(ies);
        }
        catch(error) {
            reply.code(500).send({error: "Houve algum problema ao salvar"})
        }

    })

    fastify.get("/findIes/:cnpj", async(request: any, reply) => {

        try{

            const cnpj = request.params.cnpj;

            const ies = await findIesCnpjUseCase.execute(cnpj);

            if(ies){
                reply.code(200).send(ies)
            }else{
                reply.code(404).send({erro: "Ies não encontrada"})
            }

        }
        catch(error) {
            reply.code(500).send({erro: "Erro de Servidor"})
        }

    })

    fastify.put("/updateIes/:uuid", async(request: any, reply) => {

        try {
            const uuid = request.params.uuid as UUID;
            const updateIes = request.body as IesUpdateDto;

            const iesUpdated = await updateIesUseCase.execute(uuid, updateIes)

            reply.code(200).send(iesUpdated)

        }
        catch { 
            reply.code(404).send({erro: "Ies não encontrada"})
        }

    })

    fastify.delete("/deleteIes/:uuid", async(request: any, reply) => {

        try {
            const uuid = request.params.uuid as UUID;
            
            const iesDeleted = await deleteIesUseCase.execute(uuid)

            reply.code(200).send(iesDeleted)
        }
        catch{
            reply.code(404).send({erro: "Ies não encontrada"})
        }

    })

    done();

}