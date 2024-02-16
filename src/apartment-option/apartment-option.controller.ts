import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApartmentOptionService } from './apartment-option.service';
import { CreateApartmentOptionDto } from './dto/create-apartment-option.dto';
import { UpdateApartmentOptionDto } from './dto/update-apartment-option.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Appartment option')
@Controller('apartment-option')
export class ApartmentOptionController {
  constructor(private readonly apartmentOptionService: ApartmentOptionService) {}

  @Post()
  create(@Body() createApartmentOptionDto: CreateApartmentOptionDto) {
    return this.apartmentOptionService.create(createApartmentOptionDto);
  }

  @Get()
  findAll() {
    return this.apartmentOptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apartmentOptionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApartmentOptionDto: UpdateApartmentOptionDto) {
    return this.apartmentOptionService.update(+id, updateApartmentOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apartmentOptionService.remove(+id);
  }
}
