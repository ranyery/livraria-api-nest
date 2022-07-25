import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

import { Produto } from '../models/produto.model';
import { ProdutosService } from 'src/services/produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {}

  @Get()
  obterTodos(): Produto[] {
    return this.produtosService.obterTodos();
  }

  @Get(':id')
  obterUm(@Param() params): Produto {
    const id = params['id'];
    return this.produtosService.obterUm(id);
  }

  @Post()
  criar(@Body() produto: Produto): void {
    produto.id = 100;
    this.produtosService.criar(produto);
  }

  @Put()
  alterar(@Body() produto: Produto): Produto {
    return this.produtosService.alterar(produto);
  }

  @Delete(':id')
  apagar(@Param() params): void {
    const id = +params['id'];
    this.produtosService.apagar(id);
  }
}
