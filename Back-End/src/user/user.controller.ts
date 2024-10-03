import { Controller, Get, Post,Body } from '@nestjs/common';
import { UserService } from './user.service';
// import { User } from 'src/Models/user_model';
@Controller('user')

export class UserController {
    constructor(private UserService:UserService ){}

    @Get()
    async getAllUser(){
        return await this.UserService.findAllUsers()

    }
    @Post()
    addUser(@Body() user:any){
    return this.UserService.AddUser(user)
    }
    


        
}
