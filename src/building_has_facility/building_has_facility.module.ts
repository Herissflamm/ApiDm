import { Module } from '@nestjs/common';
import { BuildingHasFacilityService } from './building_has_facility.service';
import { BuildingHasFacilityController } from './building_has_facility.controller';
import { BuildingHasFacilityEntity } from './entities/building_has_facility.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BuildingHasFacilityEntity])],
  controllers: [BuildingHasFacilityController],
  providers: [BuildingHasFacilityService],
  exports:[BuildingHasFacilityService]
})
export class BuildingHasFacilityModule {}
