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

@Controller('produtos')
export class ProdutosController {
  private produtos: Produto[] = [
    new Produto('LIV01', 'Livro TDD e BDD na prática', 29.9),
    new Produto('LIV02', 'Livro Iniciando com Flutter', 39.9),
    new Produto('LIV03', 'Inteligência artificial como serviço', 29.9),
  ];

  @Get()
  obterTodos(): Produto[] {
    return this.produtos;
  }

  @Get(':id')
  obterUm(@Param() params): Produto {
    const id = +params['id'];
    return this.produtos[id];
  }

  @Post()
  criar(@Body() produto: Produto): void {
    produto.id = this.produtos.length + 1;
    this.produtos.push(produto);
  }

  @Put()
  alterar(@Body() produto: Produto): Produto {
    return produto;
  }

  @Delete(':id')
  apagar(@Param() params): void {
    const id = +params['id'];
    this.produtos.pop();
  }
}
