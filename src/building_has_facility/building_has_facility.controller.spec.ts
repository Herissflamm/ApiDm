import { Test, TestingModule } from '@nestjs/testing';
import { BuildingHasFacilityController } from './building_has_facility.controller';
import { BuildingHasFacilityService } from './building_has_facility.service';

describe('BuildingHasFacilityController', () => {
  let controller: BuildingHasFacilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuildingHasFacilityController],
      providers: [BuildingHasFacilityService],
    }).compile();

    controller = module.get<BuildingHasFacilityController>(BuildingHasFacilityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
