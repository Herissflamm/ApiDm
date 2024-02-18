import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateApartmentTypeDto } from './dto/create-apartment-type.dto';
import { UpdateApartmentTypeDto } from './dto/update-apartment-type.dto';
import { BaseService } from 'src/@core/base-service';
import { ApartmentTypeEntity } from './entities/apartment-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ApartmentTypeService extends BaseService<ApartmentTypeEntity>{

  constructor(
    @InjectRepository(ApartmentTypeEntity)
    protected readonly repository: Repository<ApartmentTypeEntity>,
    protected readonly dataSource: DataSource,
  ){
    super(dataSource);
  }

  async create(createApartmentTypeDto: CreateApartmentTypeDto) {
    const apartmentType:ApartmentTypeEntity = new ApartmentTypeEntity();
    Object.assign(apartmentType, createApartmentTypeDto);
    
    return (await this.saveEntities(apartmentType))?.[0];
  }

  findAll():Promise<ApartmentTypeEntity[]> {
    return this.repository.find();
  }

  findOne(id: number):Promise<ApartmentTypeEntity> {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, updateApartmentTypeDto: UpdateApartmentTypeDto) {
    const apartmentType:ApartmentTypeEntity = await this.repository.findOne({where: {id}});
    if (!apartmentType){
      throw new NotFoundException("Type d'appartement introuvalbe");
    }
    Object.assign(apartmentType, updateApartmentTypeDto)
    return await this.repository.save(apartmentType);
  }

  async remove(id: number) {
    const result = await this.findOne(id);
    await this.repository.delete(id);
    return result
  }
}
