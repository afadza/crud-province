import { DataTypes, Model, Optional  } from "sequelize";
import sequelizeConnection from "../../config/connection";

interface TodoAttributes {
  id?: number
  name?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export interface TodoInput extends Optional<TodoAttributes, 'id'>{ }
export interface TodoOuput extends Required<TodoAttributes>{ }

export default class Todo extends Model<TodoAttributes, TodoInput> implements TodoAttributes {
  public id!: number
  public name!: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Todo.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  }
}, {
  timestamps: true,
  sequelize: sequelizeConnection
})