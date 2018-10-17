import * as bcrypt from 'bcrypt';

const publicFields = [
  'id',
  'email',
  'profilePicture',
  'updatedAt',
  'createdAt',
];

export default (sequelize: any, DataTypes: any) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            args: true,
            msg: 'Not valid',
          },
          len: {
            args: [1, 254],
            msg: 'Must be between 1 and 254 characters in length',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [8, 254],
            msg: 'Must be between 8 and 254 characters in length',
          },
        },
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'profile_picture',
      },
      emailConfirmed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: 'email_confirmed',
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
      },
    },
    {
      tableName: 'users',
      paranoid: true,
      timestamps: true,
    },
  );

  User.prototype.generateHash = (password: string) => bcrypt.hash(password, 8);

  User.prototype.checkPassword = function checkPassword(password: string) {
    return bcrypt.compareSync(password, this.password);
  };
  User.generateHash = (password: string) => bcrypt.hash(password, 8);
  User.associate = (models: any) => {
  };
  return User;
};
