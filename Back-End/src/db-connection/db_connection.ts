import { User } from "src/Models/user_model";

import { Sequelize,SequelizeOptions } from "sequelize-typescript";

export const sequelizeOptions:SequelizeOptions={
    dialect:'sqlite',
    storage:'users.sqlite',
    models:[User]
}
