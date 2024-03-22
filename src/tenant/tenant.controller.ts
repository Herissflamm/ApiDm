import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApartmentService } from 'src/apartment/apartment.service';
import { PersonEntity } from 'src/person/entities/person.entity';

@ApiTags('Tenant')
@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantService, private readonly apartmenService : ApartmentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a tenant' })
  async create(@Body() createTenantDto: CreateTenantDto) {
    await this.tenantService.create(createTenantDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tenant' })
  findAll() {
    return this.tenantService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tenant by id' })
  findOne(@Param('id') id: string) {
    return this.tenantService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Modify a tenant by id' })
  update(@Param('id') id: string, @Body() updateTenantDto: UpdateTenantDto) {
    return this.tenantService.update(+id, updateTenantDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a tenant by id' })
  remove(@Param('id') id: string) {
    return this.tenantService.remove(+id);
  }
}
