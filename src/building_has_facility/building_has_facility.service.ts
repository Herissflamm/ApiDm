import { Injectable } from '@nestjs/common';
import { CreateBuildingHasFacilityDto } from './dto/create-building_has_facility.dto';
import { UpdateBuildingHasFacilityDto } from './dto/update-building_has_facility.dto';

@Injectable()
export class BuildingHasFacilityService {
  create(createBuildingHasFacilityDto: CreateBuildingHasFacilityDto) {
    return 'This action adds a new buildingHasFacility';
  }

  findAll() {
    return `This action returns all buildingHasFacility`;
  }

  findOne(id: number) {
    return `This action returns a #${id} buildingHasFacility`;
  }

  update(id: number, updateBuildingHasFacilityDto: UpdateBuildingHasFacilityDto) {
    return `This action updates a #${id} buildingHasFacility`;
  }

  remove(id: number) {
    return `This action removes a #${id} buildingHasFacility`;
  }
}
