import { Injectable } from '@nestjs/common';

import { Livro } from 'src/models/livro.model';

@Injectable()
export class LivrosService {
  private livros: Livro[] = [
    new Livro('LIV01', 'TDD e BDD na prática', 29.9),
    new Livro('LIV02', 'Iniciando com Flutter', 39.9),
    new Livro('LIV03', 'Inteligência artificial como serviço', 29.9),
  ];

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
