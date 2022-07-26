import { Injectable } from '@nestjs/common';

import { Livro } from 'src/models/livro.model';

@Injectable()
export class LivrosService {
  private livros: Livro[] = [];

  obterTodos(): Livro[] {
    return this.livros;
  }

  obterUm(id: number): Livro {
    return this.livros[0];
  }

  criar(livro: Livro): void {
    this.livros.push(livro);
  }

  alterar(livro: Livro): Livro {
    return livro;
  }

  apagar(id: number): void {
    this.livros.pop();
  }
}
