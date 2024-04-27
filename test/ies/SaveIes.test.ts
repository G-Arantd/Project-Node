import { IesCreateDto } from "../../src/models/ies/data/entity/Ies";
import { IesRepository } from "../../src/models/ies/data/repository/IesRepository"
import { SaveIesUseCase } from "../../src/models/ies/domain/useCase/SaveIesUseCase";

describe("SaveIes", () => {

    it(
        "Teste de Criação de nova ies",
        async () => {

            const iesRepository = new IesRepository();
            const saveIesUseCase = new SaveIesUseCase(iesRepository);
            
            const iesCreateDto: IesCreateDto = {
                nameIes: "TesteIes",
                cnpjIes: "12345678901234"
            }
        
            const ies = await saveIesUseCase.execute(iesCreateDto)

            expect(ies).toBeDefined();
            expect(ies.idIes).toBeDefined();
            expect(ies.nameIes).toBe(iesCreateDto.nameIes);
            expect(ies.cnpjIes).toBe(iesCreateDto.cnpjIes);

        }
    )

    it(
        "Teste de Criação de nova ies",
        async () => {

            const iesRepository = new IesRepository();
            const saveIesUseCase = new SaveIesUseCase(iesRepository);
            
            const iesCreateDto: IesCreateDto = {
                nameIes: "TesteIes",
                cnpjIes: "12345678901234"
            }
        
            const ies = await saveIesUseCase.execute(iesCreateDto)

            expect(ies).toBeDefined();
            expect(ies.idIes).toBeDefined();
            expect(ies.nameIes).toBe(iesCreateDto.nameIes);
            expect(ies.cnpjIes).toBe(iesCreateDto.cnpjIes);

        }
    )
    
})