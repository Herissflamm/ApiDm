import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuildingHasFacilityService } from './building_has_facility.service';
import { CreateBuildingHasFacilityDto } from './dto/create-building_has_facility.dto';
import { UpdateBuildingHasFacilityDto } from './dto/update-building_has_facility.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Facility By Building')
@Controller('building-has-facility')
export class BuildingHasFacilityController {
  constructor(private readonly buildingHasFacilityService: BuildingHasFacilityService) {}

  @Post()
  create(@Body() createBuildingHasFacilityDto: CreateBuildingHasFacilityDto) {
    return this.buildingHasFacilityService.createwithDto(createBuildingHasFacilityDto);
  }

  @Get()
  findAll() {
    return this.buildingHasFacilityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildingHasFacilityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuildingHasFacilityDto: UpdateBuildingHasFacilityDto) {
    return this.buildingHasFacilityService.update(+id, updateBuildingHasFacilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buildingHasFacilityService.remove(+id);
  }
}
