import { ies } from "@prisma/client";
import { IesCreateDto, IesUpdateDto } from "../entity/Ies";
import prisma from "../../../../config/database";
import { UUID } from "crypto";

export interface IesRepositoryInterface{
    saveIes(ies: IesCreateDto): Promise<ies>

}

export class IesRepository implements IesRepositoryInterface{
    
    async saveIes(ies: IesCreateDto): Promise<ies>{
        
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

    async findIes(iesUUID: UUID): Promise<ies | null>{

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

    async findIesCnpj(cnpj: string): Promise<ies | null>{

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

    async updateIes(iesUUID: string, ies: IesUpdateDto): Promise<ies>{

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