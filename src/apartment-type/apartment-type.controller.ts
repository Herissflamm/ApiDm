import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApartmentTypeService } from './apartment-type.service';
import { CreateApartmentTypeDto } from './dto/create-apartment-type.dto';
import { UpdateApartmentTypeDto } from './dto/update-apartment-type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Apartment type')
@Controller('apartment-type')
export class ApartmentTypeController {
  constructor(private readonly apartmentTypeService: ApartmentTypeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a Apartment type' })
  create(@Body() createApartmentTypeDto: CreateApartmentTypeDto) {
    return this.apartmentTypeService.create(createApartmentTypeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Apartment type' })
  findAll() {
    return this.apartmentTypeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a Apartment type by id' })
  findOne(@Param('id') id: string) {
    return this.apartmentTypeService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Modify a Apartment type by id' })
  update(@Param('id') id: string, @Body() updateApartmentTypeDto: UpdateApartmentTypeDto) {
    return this.apartmentTypeService.update(+id, updateApartmentTypeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Apartment type by id' })
  remove(@Param('id') id: string) {
    return this.apartmentTypeService.remove(+id);
  }
}
