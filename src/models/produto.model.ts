export class Produto {
  public id?: number;
  public codigo: string;
  public nome: string;
  public preco: number;

  constructor(codigo: string, nome: string, preco) {
    this.codigo = codigo;
    this.nome = nome;
    this.preco = preco;
  }
}
