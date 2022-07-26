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
  async obterTodos(): Promise<Livro[]> {
    return this.livrosService.obterTodos();
  }

  @Get(':id')
  async obterUm(@Param() params): Promise<Livro> {
    const id = params['id'];
    return this.livrosService.obterUm(id);
  }

  @Post()
  async criar(@Body() livro: Livro): Promise<void> {
    this.livrosService.criar(livro);
  }

  @Put()
  async alterar(@Body() livro: Livro): Promise<[number, Livro[]]> {
    return this.livrosService.alterar(livro);
  }

  @Delete(':id')
  async apagar(@Param() params): Promise<void> {
    const id = +params['id'];
    this.livrosService.apagar(id);
  }
}
