import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Appartments')
@Controller('apartment')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a Apartment' })
  create(@Body() createApartmentDto: CreateApartmentDto) {
    return this.apartmentService.create(createApartmentDto);
  }

  @Get('principal-tenant/:id')
  @ApiOperation({ summary: 'Get a Apartment by id with principal tenant' })
  findPrincipalTenant(@Param('id') id: string) {
    return this.apartmentService.findPrincipalTenant(+id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a Apartment by id' })
  findOne(@Param('id') id: string) {
    return this.apartmentService.findOne(+id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Apartment' })
  findAll() {
    return this.apartmentService.findAll();
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Modify a Apartment by id' })
  update(@Param('id') id: string, @Body() updateApartmentDto: UpdateApartmentDto) {
    return this.apartmentService.update(+id, updateApartmentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Apartment by id' })
  remove(@Param('id') id: string) {
    return this.apartmentService.remove(+id);
  }
}
