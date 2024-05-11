import { IesCreateDto } from "../../src/models/ies/data/entity/Ies";
import { IesRepository } from "../../src/models/ies/data/repository/IesRepository"
import { SaveIesUseCase } from "../../src/models/ies/domain/useCase/SaveIesUseCase";
import { FakeDataService } from "../../src/services/fake.data.service";

describe("SaveIes", () => {

    let saveIesUseCase: SaveIesUseCase
    let fakeService: any

    beforeEach(() => {

        const iesRepository = new IesRepository();
        saveIesUseCase = new SaveIesUseCase(iesRepository);
        fakeService = FakeDataService();
        
    })

    it(
        "Teste de Criação de nova ies",
        async () => {
            
            const iesCreateDto: IesCreateDto = {
                nameIes: fakeService.username,
                cnpjIes: fakeService.cnpj
            }
        
            const ies = await saveIesUseCase.execute(iesCreateDto)

            expect(ies).toBeDefined();
            expect(ies.idIes).toBeDefined();
            expect(ies.nameIes).toBe(iesCreateDto.nameIes);
            expect(ies.cnpjIes).toBe(iesCreateDto.cnpjIes);

        }
    )

    it("Teste de Criação do mesmo CNPJ",
        async () => {

            const cnpjIes = fakeService.cnpj;
            let iesTest: IesCreateDto = {
                nameIes: "Teste 1",
                cnpjIes
            }

            await saveIesUseCase.execute(iesTest)

            iesTest.nameIes = "Usuario Falso"

            try{
                const ies = await saveIesUseCase.execute(iesTest)
                expect(ies).toBeUndefined();
            }
            catch(error: any) {
                expect(error).toBeInstanceOf(Error);
                expect(error.message).toBe("Problema ao criar IES")
            }


        }
    )
    
})