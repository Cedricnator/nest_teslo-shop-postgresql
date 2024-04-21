import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from '../../../src/products/controllers/products.controller';
import { ProductsService } from '../../../src/products/services/products.service';

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
