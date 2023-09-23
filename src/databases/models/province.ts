import { DataTypes, Model, Optional  } from "sequelize";
import sequelizeConnection from "../../config/connection";

interface ProvinceAttributes {
  id?: number
  name?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export interface ProvinceInput extends Optional<ProvinceAttributes, 'id'>{ }
export interface ProvinceOuput extends Required<ProvinceAttributes>{ }

export default class Province extends Model<ProvinceAttributes, ProvinceInput> implements ProvinceAttributes {
  public id!: number
  public name!: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Province.init({
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