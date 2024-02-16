import { Test, TestingModule } from '@nestjs/testing';
import { BuildingHasFacilityService } from './building_has_facility.service';

describe('BuildingHasFacilityService', () => {
  let service: BuildingHasFacilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuildingHasFacilityService],
    }).compile();

    service = module.get<BuildingHasFacilityService>(BuildingHasFacilityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
