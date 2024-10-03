import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
// import { error } from 'console';
import { User } from 'src/Models/user_model';
import {bcrypt } from 'bcrypt'
@Injectable()
export class UserService {
    constructor(@InjectModel(User)
    private userModel:typeof User
){}

    async findAllUsers(){
        return this.userModel.findAll()
    }
    async AddUser(user:any){
        try{
          
          return await this.userModel.create(user)
        }
        catch(error){
            return (error)

        }

    }
}
