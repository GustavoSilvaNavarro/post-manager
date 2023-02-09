import { DataTypes, Model, Optional } from 'sequelize';

import { sequelize } from '@/models/connectionDb';
import { IPost } from '@/types/api-data';

export const PostSchema = sequelize.define<Model<IPost, Optional<IPost, 'id'>>>(
  'posts',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value: string) {
        this.setDataValue('name', value.trim());
      },
      validate: {
        notNull: {
          msg: 'Name is required',
        },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value: string) {
        this.setDataValue('description', value.trim());
      },
      validate: {
        notNull: {
          msg: 'Description is required',
        },
      },
    },
  },
  {
    timestamps: false,
  }
);
