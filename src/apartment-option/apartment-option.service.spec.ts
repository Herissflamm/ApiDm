import { Test, TestingModule } from '@nestjs/testing';
import { ApartmentOptionService } from './apartment-option.service';

describe('ApartmentOptionService', () => {
  let service: ApartmentOptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApartmentOptionService],
    }).compile();

    service = module.get<ApartmentOptionService>(ApartmentOptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
