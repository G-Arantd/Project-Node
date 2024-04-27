import { Ies } from "@prisma/client";
import { IesCreateDto, IesUpdateDto } from "../entity/Ies";
import prisma from "../../../../config/database";
import { UUID } from "crypto";

export interface IesRepositoryInterface{
    saveIes(ies: IesCreateDto): Promise<Ies>

}

export class IesRepository implements IesRepositoryInterface{
    
    async saveIes(ies: IesCreateDto): Promise<Ies>{
        
        try {

            const iesCreate = await prisma.ies.create({
                data: ies
            })

            return iesCreate

        } 
        catch (error) {
            throw new Error("Falha ao salvar ies");
        }

    }

    async findIes(iesUUID: UUID): Promise<Ies | null>{

        try {
            const iesFind = await prisma.ies.findUnique({
                where: {idIes: iesUUID}
            })

            return iesFind
        }
        catch (error) {

            throw new Error("Problema ao buscar IES")

        }

    }

    async findIesCnpj(cnpj: string): Promise<Ies | null>{

        try {
            const iesFindCnpj = await prisma.ies.findUnique({
                where: {cnpjIes: cnpj}
            })

            return iesFindCnpj
        }
        catch (error) {

            throw new Error("Problema ao buscar IES")

        }

    }

    async updateIes(iesUUID: UUID, ies: IesUpdateDto): Promise<Ies>{

        try {
            const iesUpdate = await prisma.ies.update({
                where: {idIes: iesUUID},
                data: ies
            })

            return iesUpdate
        }
        catch (error) {

            throw new Error("Problema ao buscar IES")

        }

    }

    async deleteIes(iesUUID: UUID): Promise<void>{

        try {
            await prisma.ies.delete({
                where: {idIes: iesUUID}
            })
        }
        catch (error) {

            throw new Error("Problema ao buscar IES")

        }

    }




}