import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';

export interface Address {
  district: string;
  city: string;
  street: string;
  state: string;
  number: string;
  cep: string;
}

export interface EnterpriseAttributes {
  id?: number;
  name: string;
  status: string;
  purpose: string;
  address: Address;
}

export interface EnterpriseCreationAttributes extends Optional<EnterpriseAttributes, 'id'> {}

class Enterprise extends Model<EnterpriseAttributes, EnterpriseCreationAttributes>
  implements EnterpriseAttributes {
  public id!: number;
  public name!: string;
  public status!: string;
  public purpose!: string;
  public address!: Address;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Enterprise.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
    purpose: { type: DataTypes.STRING, allowNull: false },
    address: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'enterprise',
  }
);

sequelize.sync()
  .then(() => {
    console.log('Models synced successfully');
  })
  .catch((error) => {
    console.error('Error syncing models:', error);
  });

export default Enterprise;
