import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';


@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: +process.env.DB_PORT | 9432,
      database: 'postgres',
      username: 'postgres',
      password: 'postgres',
      autoLoadEntities: true, // Type ORM will load all the entities in the entities folder
      synchronize: true // NEVER USE IN PRODUCTION,
    }),
    
    ProductsModule
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
