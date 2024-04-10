import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('Profile', {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    about: DataTypes.TEXT,
    bio: DataTypes.TEXT,
    location: DataTypes.STRING,
    followerCount: DataTypes.TEXT,
    connectionCount: DataTypes.TEXT
  });
};
