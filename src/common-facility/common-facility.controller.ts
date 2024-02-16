import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommonFacilityService } from './common-facility.service';
import { CreateCommonFacilityDto } from './dto/create-common-facility.dto';
import { UpdateCommonFacilityDto } from './dto/update-common-facility.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Common facility')
@Controller('common-facility')
export class CommonFacilityController {
  constructor(private readonly commonFacilityService: CommonFacilityService) {}

  @Post()
  create(@Body() createCommonFacilityDto: CreateCommonFacilityDto) {
    return this.commonFacilityService.create(createCommonFacilityDto);
  }

  @Get()
  findAll() {
    return this.commonFacilityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commonFacilityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommonFacilityDto: UpdateCommonFacilityDto) {
    return this.commonFacilityService.update(+id, updateCommonFacilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commonFacilityService.remove(+id);
  }
}
