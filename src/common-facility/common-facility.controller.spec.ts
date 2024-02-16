import { Test, TestingModule } from '@nestjs/testing';
import { CommonFacilityController } from './common-facility.controller';
import { CommonFacilityService } from './common-facility.service';

describe('CommonFacilityController', () => {
  let controller: CommonFacilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommonFacilityController],
      providers: [CommonFacilityService],
    }).compile();

    controller = module.get<CommonFacilityController>(CommonFacilityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
