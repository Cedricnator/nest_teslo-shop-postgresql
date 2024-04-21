import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';


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
      autoLoadEntities: true,
      synchronize: true // NEVER USE IN PRODUCTION,
    })
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
