export interface Ies {
    idIes: string;
    nameIes: string;
    cnpjIes: string;
    creationDateIes: Date;
}

export interface IesCreateDto {
    nameIes: string;
    cnpjIes: string;
}

export interface IesUpdateDto {
    nameIes?: string;
    cnpjIes?: string;
}