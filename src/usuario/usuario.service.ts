import { Injectable } from '@nestjs/common';
import { Usuario } from './dto/usuario.dto';

@Injectable()
export class UsuarioService {

    private usuarios: Usuario[] = [
    {nome: "Lucas", email: "lucas.dev@Yahoo.com.br"},
    {nome: "gabriel", email: "gabriel.dev@Yahoo.com.br"}
   ];

    getAll() : Usuario[] {
        return this.usuarios;
    };


    insertUser(req: Usuario): Usuario[] {
        if(req.email == null || req.email == '') throw Error("email nao preenchido")
        if(req.nome == null || req.nome == '') throw Error("nome nao preenchido")

        this.usuarios.push({nome: req.nome, email: req.email})

        return this.usuarios;
    }

}
