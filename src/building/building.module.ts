import { Module } from '@nestjs/common';
import { BuildingService } from './building.service';
import { BuildingController } from './building.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildingEntity } from './entities/building.entity';
import { AddressModule } from 'src/address/address.module';
import { BuildingHasFacilityModule } from 'src/building_has_facility/building_has_facility.module';
import { CommonFacilityModule } from 'src/common-facility/common-facility.module';

@Module({
  imports:[AddressModule,BuildingHasFacilityModule,CommonFacilityModule,TypeOrmModule.forFeature([BuildingEntity])],
  controllers: [BuildingController],
  providers: [BuildingService],
  exports:[BuildingService]
})
export class BuildingModule {}
