import { Test, TestingModule } from '@nestjs/testing';
import { ApartmentOptionController } from './apartment-option.controller';
import { ApartmentOptionService } from './apartment-option.service';

describe('ApartmentOptionController', () => {
  let controller: ApartmentOptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApartmentOptionController],
      providers: [ApartmentOptionService],
    }).compile();

    controller = module.get<ApartmentOptionController>(ApartmentOptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
