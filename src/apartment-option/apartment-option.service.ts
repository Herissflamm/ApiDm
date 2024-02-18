import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateApartmentOptionDto } from './dto/create-apartment-option.dto';
import { UpdateApartmentOptionDto } from './dto/update-apartment-option.dto';
import { BaseService } from 'src/@core/base-service';
import { ApartmentOptionEntity } from './entities/apartment-option.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { prototype } from 'events';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ApartmentOptionService extends BaseService<ApartmentOptionEntity> {

  constructor(
    @InjectRepository(ApartmentOptionEntity)
    protected readonly repository: Repository<ApartmentOptionEntity>,
    protected readonly dataSource: DataSource,
  ){
    super(dataSource);
  }
  async create(createApartmentOptionDto: CreateApartmentOptionDto):Promise<ApartmentOptionEntity> {
    const option = new ApartmentOptionEntity();
    Object.assign(option, createApartmentOptionDto);
    return (await this.saveEntities(option))?.[0];
  }

  findAll():Promise<ApartmentOptionEntity[]> {
    return this.repository.find();
  }

  findOne(id: number):Promise<ApartmentOptionEntity> {
    return this.repository.findOneBy({id});
  }

  async update(id: number, updateApartmentOptionDto: UpdateApartmentOptionDto):Promise<ApartmentOptionEntity> {
    const option:ApartmentOptionEntity = await this.repository.findOne({ where: { id } })
    if (!option){
      throw new NotFoundException('Option not found');
    }
    Object.assign(option, updateApartmentOptionDto)
    return await this.repository.save(option);
  }

  async remove(id: number) {
    const result = await this.findOne(id);
    await this.repository.delete(id);
    return result
  }
}
