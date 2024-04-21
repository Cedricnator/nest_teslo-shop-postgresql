import { Module }             from '@nestjs/common';
import { Product }            from './entities';
import { ProductsController } from './controllers';
import { ProductsService }    from './services';
import { TypeOrmModule }      from '@nestjs/typeorm';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    TypeOrmModule.forFeature([ Product ])
  ]
})
export class ProductsModule {}
