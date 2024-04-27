import { IesRepository } from "../../data/repository/IesRepository";
import { UUID } from "crypto";

export class DeleteIesUseCase{

    constructor(private iesRepository: IesRepository){}

    async execute(idIes : UUID){

        try {
            const iesDeleted = await this.iesRepository.deleteIes(idIes);
            return iesDeleted
        }
        catch(error) {
            throw new Error("Problema ao criar IES")
        }
    }
}