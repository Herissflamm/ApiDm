import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuildingHasFacilityService } from './building_has_facility.service';
import { CreateBuildingHasFacilityDto } from './dto/create-building_has_facility.dto';
import { UpdateBuildingHasFacilityDto } from './dto/update-building_has_facility.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Facility By Building')
@Controller('building-has-facility')
export class BuildingHasFacilityController {
  constructor(private readonly buildingHasFacilityService: BuildingHasFacilityService) {}

  @Post()
  @ApiOperation({ summary: 'Create a facility building' })
  create(@Body() createBuildingHasFacilityDto: CreateBuildingHasFacilityDto) {
    return this.buildingHasFacilityService.createwithDto(createBuildingHasFacilityDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all facility building' })
  findAll() {
    return this.buildingHasFacilityService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a facility building by id' })
  findOne(@Param('id') id: string) {
    return this.buildingHasFacilityService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Modify a facility building by id' })
  update(@Param('id') id: string, @Body() updateBuildingHasFacilityDto: UpdateBuildingHasFacilityDto) {
    return this.buildingHasFacilityService.update(+id, updateBuildingHasFacilityDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a facility building by id' })
  remove(@Param('id') id: string) {
    return this.buildingHasFacilityService.remove(+id);
  }
}
