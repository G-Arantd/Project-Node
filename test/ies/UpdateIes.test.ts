import { IesCreateDto, IesUpdateDto } from "../../src/models/ies/data/entity/Ies";
import { IesRepository } from "../../src/models/ies/data/repository/IesRepository"
import { SaveIesUseCase } from "../../src/models/ies/domain/useCase/SaveIesUseCase";
import { UpdateIesUseCase } from "../../src/models/ies/domain/useCase/UpdateIesUseCase";
import { FakeDataService } from "../../src/services/fake.data.service";

describe("UpdateIes", () => {

    let updateIesUseCase : UpdateIesUseCase;
    let saveIesUseCase: SaveIesUseCase;
    let fakeService: any;    

    beforeEach(() => {
        const iesRepository = new IesRepository();
        updateIesUseCase = new UpdateIesUseCase(iesRepository);
        saveIesUseCase = new SaveIesUseCase(iesRepository);
        fakeService = FakeDataService();
    })

    it("Teste de Alteração de IES",
    async () => {
            
        const iesCreateDto: IesCreateDto = {
            nameIes: fakeService.username,
            cnpjIes: fakeService.cnpj
        }
    
        const ies = await saveIesUseCase.execute(iesCreateDto)

        const iesUpdateDto : IesUpdateDto = {
            nameIes: "UPDATE IES"
        }

        const iesUpdate = await updateIesUseCase.execute(ies.idIes, iesUpdateDto);

        expect(iesUpdate).toBeDefined();
        expect(iesUpdate.idIes).toBe(ies.idIes);
        expect(iesUpdate.cnpjIes).toBe(ies.cnpjIes);
        expect(iesUpdate.nameIes).toBe(iesUpdateDto.nameIes);

    })

})