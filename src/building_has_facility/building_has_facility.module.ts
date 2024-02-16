import { Module } from '@nestjs/common';
import { BuildingHasFacilityService } from './building_has_facility.service';
import { BuildingHasFacilityController } from './building_has_facility.controller';

@Module({
  controllers: [BuildingHasFacilityController],
  providers: [BuildingHasFacilityService],
})
export class BuildingHasFacilityModule {}
