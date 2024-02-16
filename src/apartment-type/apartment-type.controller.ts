import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApartmentTypeService } from './apartment-type.service';
import { CreateApartmentTypeDto } from './dto/create-apartment-type.dto';
import { UpdateApartmentTypeDto } from './dto/update-apartment-type.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Appartment type')
@Controller('apartment-type')
export class ApartmentTypeController {
  constructor(private readonly apartmentTypeService: ApartmentTypeService) {}

  @Post()
  create(@Body() createApartmentTypeDto: CreateApartmentTypeDto) {
    return this.apartmentTypeService.create(createApartmentTypeDto);
  }

  @Get()
  findAll() {
    return this.apartmentTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apartmentTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApartmentTypeDto: UpdateApartmentTypeDto) {
    return this.apartmentTypeService.update(+id, updateApartmentTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apartmentTypeService.remove(+id);
  }
}
