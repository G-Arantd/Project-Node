import { IesUpdateDto } from "../../data/entity/Ies";
import { IesRepository } from "../../data/repository/IesRepository";
import { ies } from "@prisma/client";
import { UUID } from "crypto";

export class UpdateIesUseCase{

    constructor(private iesRepository: IesRepository){}

    async execute(idIes : string, ies: IesUpdateDto): Promise<ies>{

        try {
            const iesUpdate = await this.iesRepository.updateIes(idIes, ies);
            return iesUpdate
        }
        catch(error) {
            throw new Error("Problema ao criar IES")
        }
    }
}