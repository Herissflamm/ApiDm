import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApartmentOptionService } from './apartment-option.service';
import { CreateApartmentOptionDto } from './dto/create-apartment-option.dto';
import { UpdateApartmentOptionDto } from './dto/update-apartment-option.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Appartment option')
@Controller('apartment-option')
export class ApartmentOptionController {
  constructor(private readonly apartmentOptionService: ApartmentOptionService) {}

  @Post()
  @ApiOperation({ summary: 'Create a Apartment option' })
  create(@Body() createApartmentOptionDto: CreateApartmentOptionDto) {
    return this.apartmentOptionService.create(createApartmentOptionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Apartment option' })
  findAll() {
    return this.apartmentOptionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a Apartment option by id' })
  findOne(@Param('id') id: string) {
    return this.apartmentOptionService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Modify a Apartment option by id' })
  update(@Param('id') id: string, @Body() updateApartmentOptionDto: UpdateApartmentOptionDto) {
    return this.apartmentOptionService.update(+id, updateApartmentOptionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Apartment option by id' })
  remove(@Param('id') id: string) {
    return this.apartmentOptionService.remove(+id);
  }
}
