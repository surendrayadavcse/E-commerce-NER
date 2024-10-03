import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/Models/user_model';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
    imports:[SequelizeModule.forFeature([User])],
    providers:[UserService],
    controllers:[UserController],
    exports:[SequelizeModule]
})
export class UserModule {
    
}
