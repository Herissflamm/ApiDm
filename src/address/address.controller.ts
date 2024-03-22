import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Res, ParseIntPipe, NotFoundException, HttpStatus } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('addresses')
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get()
  @ApiOperation({ summary: 'Get all Adress' })
  findAll() {
    return this.addressService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create an Adress' })
  create(@Body() createAddressDto: CreateAddressDto) {
    return this.addressService.create(createAddressDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an Adress by id' })
  findOne(@Param('id') id: string) {
    return this.addressService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Modify an Adress by id' })
  update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) {
    return this.addressService.update(+id, updateAddressDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an Adress by id' })
  remove(@Param('id') id: string) {
    return this.addressService.deleteAddress(+id);
  }
}
