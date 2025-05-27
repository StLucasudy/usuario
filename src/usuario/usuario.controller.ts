import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './dto/usuario.dto';

@Controller('usuario')
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService) {}

    @Get()
    findAll() {
        return this.usuarioService.getAll();
    }

    @Get(":nome")
    findByName(@Param('nome') nome: string ) {
        return this.usuarioService.getUser(nome);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    saveNew(@Body() req: Usuario) {
        return this.usuarioService.insertUser(req);
    }

    @Delete(":nome")
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteUser(@Param('nome') nome: string) {
        return this.usuarioService.deleteUser(nome);
    }
}
