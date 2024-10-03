import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { Sequelize } from 'sequelize';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './Models/user_model';
import { UserModule } from './user/user.module';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect:'sqlite',
      storage:'users.sqlite',
      models:[User],
      autoLoadModels: true,             // Automatically load models
      synchronize: true,                // Synchronize models with the database
    }),
    UserModule,
    ProductsModule
  ],
  controllers: [AppController, UserController, ProductsController],
  providers: [AppService, UserService, ProductsService],
})
export class AppModule {}
