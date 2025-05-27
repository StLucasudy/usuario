import { IsString, IsEmail } from 'class-validator';

export class Usuario {

    @IsString()
    nome: string;
    
    @IsEmail()
    email: string;

}