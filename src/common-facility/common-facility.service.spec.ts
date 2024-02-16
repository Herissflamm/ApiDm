import { Test, TestingModule } from '@nestjs/testing';
import { CommonFacilityService } from './common-facility.service';

describe('CommonFacilityService', () => {
  let service: CommonFacilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommonFacilityService],
    }).compile();

    service = module.get<CommonFacilityService>(CommonFacilityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
