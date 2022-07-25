import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {
  @Get()
  obterTodos(): string {
    return 'Lista de todos os produtos';
  }

  @Get(':id')
  obterUm(@Param() params): string {
    const id = +params['id'];
    return `Retorna os dados do produto ${id}`;
  }

  @Post()
  criar(@Body() produto): string {
    console.log(produto);
    return `Produto criado`;
  }

  @Put()
  alterar(@Body() produto): string {
    console.log(produto);
    return `Produto atualizado`;
  }

  @Delete(':id')
  apagar(@Param() params): string {
    const id = +params['id'];
    return `Apaga o produto ${id}`;
  }
}
