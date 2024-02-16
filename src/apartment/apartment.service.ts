import { Injectable } from '@nestjs/common';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { BaseService } from 'src/@core/base-service';
import { ApartmentEntity } from './entities/apartment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { BuildingEntity } from 'src/building/entities/building.entity';
import { BuildingService } from 'src/building/building.service';

@Injectable()
export class ApartmentService extends BaseService<ApartmentEntity>{

  constructor(
    @InjectRepository(ApartmentEntity)
    protected readonly repository: Repository<ApartmentEntity>,
    protected readonly buildingService: BuildingService,
    protected readonly dataSource: DataSource,
  ){
    super(dataSource);
  }

  async create(createApartmentDto: CreateApartmentDto, id: number): Promise<ApartmentEntity> {
    const apartment:ApartmentEntity = new ApartmentEntity();
    Object.assign(apartment,createApartmentDto);
    const building:BuildingEntity = await this.buildingService.findOne(id)
    if (!building) {
      throw new Error('Building not found');
    }
    apartment.building = building;
    return (await this.saveEntities(apartment))?.[0];
  }

  findAll() {
    return `This action returns all apartment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apartment`;
  }

  update(id: number, updateApartmentDto: UpdateApartmentDto) {
    return `This action updates a #${id} apartment`;
  }

  remove(id: number) {
    return `This action removes a #${id} apartment`;
  }
}
