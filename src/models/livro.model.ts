import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Livro extends Model<Livro> {
  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  public codigo: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public nome: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  public preco: number;
}
