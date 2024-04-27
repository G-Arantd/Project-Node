import { IesRepository } from "../../data/repository/IesRepository";
import { Ies } from "@prisma/client";
import { UUID } from "crypto";

export class FindIesCnpjUseCase{

    constructor(private iesRepository: IesRepository){}

    async execute(cnpjIes : string): Promise<Ies | null>{

        try {
            const iesFind = await this.iesRepository.findIesCnpj(cnpjIes);
            return iesFind
        }
        catch(error) {
            throw new Error("Problema ao criar IES")
        }
    }
}