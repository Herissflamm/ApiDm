import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommonFacilityDto } from './dto/create-common-facility.dto';
import { UpdateCommonFacilityDto } from './dto/update-common-facility.dto';
import { CommonFacilityEntity } from './entities/common-facility.entity';
import { BaseService } from 'src/@core/base-service';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { BuildingHasFacilityEntity } from 'src/building_has_facility/entities/building_has_facility.entity';

@Injectable()
export class CommonFacilityService extends BaseService<CommonFacilityEntity> {

  constructor(
    @InjectRepository(CommonFacilityEntity)
    protected readonly repository: Repository<CommonFacilityEntity>,
    protected readonly dataSource: DataSource,
  ){
    super(dataSource);
  }
  
  async create(createCommonFacilityDto: CreateCommonFacilityDto):Promise<CommonFacilityEntity> {
    const facilitie = new CommonFacilityEntity();
    Object.assign(facilitie, createCommonFacilityDto)
    return (await this.saveEntities(facilitie))?.[0];
  }

  findAll():Promise<CommonFacilityEntity[]> {
    return this.repository.find();
  }

  findOne(id: number):Promise<CommonFacilityEntity> {
    return this.repository.findOneBy({id});
  }

  async update(id: number, updateCommonFacilityDto: UpdateCommonFacilityDto):Promise<CommonFacilityEntity> {
    const facilitie:CommonFacilityEntity = await this.repository.findOne({where: {id}})
    if (!facilitie){
      throw new NotFoundException('Facilitie not found');
    }
    Object.assign(facilitie, updateCommonFacilityDto)
    return await this.repository.save(facilitie)
  } 

  async remove(id: number) {
    const result = await this.findOne(id);
    await this.repository.delete(id);
    return result
  }
}
