import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommonFacilityService } from './common-facility.service';
import { CreateCommonFacilityDto } from './dto/create-common-facility.dto';
import { UpdateCommonFacilityDto } from './dto/update-common-facility.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Common facility')
@Controller('common-facility')
export class CommonFacilityController {
  constructor(private readonly commonFacilityService: CommonFacilityService) {}

  @Post()
  @ApiOperation({ summary: 'Create a common facility' })
  create(@Body() createCommonFacilityDto: CreateCommonFacilityDto) {
    return this.commonFacilityService.create(createCommonFacilityDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all common facility' })
  findAll() {
    return this.commonFacilityService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a common facility by id' })
  findOne(@Param('id') id: string) {
    return this.commonFacilityService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a common facility' })
  update(@Param('id') id: string, @Body() updateCommonFacilityDto: UpdateCommonFacilityDto) {
    return this.commonFacilityService.update(+id, updateCommonFacilityDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a common facility' })
  remove(@Param('id') id: string) {
    return this.commonFacilityService.remove(+id);
  }
}
