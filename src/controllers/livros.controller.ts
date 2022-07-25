import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

import { Livro } from '../models/livro.model';
import { LivrosService } from 'src/services/livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  obterTodos(): Livro[] {
    return this.livrosService.obterTodos();
  }

  @Get(':id')
  obterUm(@Param() params): Livro {
    const id = params['id'];
    return this.livrosService.obterUm(id);
  }

  @Post()
  criar(@Body() livro: Livro): void {
    livro.id = 100;
    this.livrosService.criar(livro);
  }

  @Put()
  alterar(@Body() livro: Livro): Livro {
    return this.livrosService.alterar(livro);
  }

  @Delete(':id')
  apagar(@Param() params): void {
    const id = +params['id'];
    this.livrosService.apagar(id);
  }
}
