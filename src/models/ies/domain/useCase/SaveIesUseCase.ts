import { IesCreateDto } from "../../data/entity/Ies";
import { IesRepository } from "../../data/repository/IesRepository";

export class SaveIesUseCase{

    constructor(private iesRepository: IesRepository){}

    async execute(ies: IesCreateDto){

        try {

            const iesCreated = await this.iesRepository.saveIes(ies);
            return iesCreated;
            
        }
        catch(error) {
            throw new Error("Problema ao criar IES")
        }
    }
}