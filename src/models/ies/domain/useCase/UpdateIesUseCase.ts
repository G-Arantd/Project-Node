import { IesUpdateDto } from "../../data/entity/Ies";
import { IesRepository } from "../../data/repository/IesRepository";
import { Ies } from "@prisma/client";
import { UUID } from "crypto";

export class UpdateIesUseCase{

    constructor(private iesRepository: IesRepository){}

    async execute(idIes : UUID, ies: IesUpdateDto): Promise<Ies>{

        try {
            const iesUpdate = await this.iesRepository.updateIes(idIes, ies);
            return iesUpdate
        }
        catch(error) {
            throw new Error("Problema ao criar IES")
        }
    }
}