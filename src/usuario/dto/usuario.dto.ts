import { IsString, IsEmail } from 'class-validator';

export class Usuario {

    @IsString()
    nome: string;
    @IsEmail()
    email: string;

    constructor(nome: string, email: string) {
        this.nome = nome;
        this.email = email;
    }

}