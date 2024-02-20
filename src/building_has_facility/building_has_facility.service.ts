import { Injectable } from '@nestjs/common';
import { CreateBuildingHasFacilityDto } from './dto/create-building_has_facility.dto';
import { UpdateBuildingHasFacilityDto } from './dto/update-building_has_facility.dto';
import { BaseService } from 'src/@core/base-service';
import { BuildingHasFacilityEntity } from './entities/building_has_facility.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { ApartmentController } from 'src/apartment/apartment.controller';

@Injectable()
export class BuildingHasFacilityService extends BaseService<BuildingHasFacilityEntity>{

  constructor(
    @InjectRepository(BuildingHasFacilityEntity)
    protected readonly repository: Repository<BuildingHasFacilityEntity>,
    protected readonly dataSource: DataSource,
  ){
    super(dataSource);
  }

  async create(createBuildingHasFacilityDto: BuildingHasFacilityEntity):Promise<BuildingHasFacilityEntity> {

    const infoFacilitie:BuildingHasFacilityEntity = new BuildingHasFacilityEntity();
    /* Object.assign(infoFacilitie,createBuildingHasFacilityDto); */
    infoFacilitie.building = createBuildingHasFacilityDto[1];
    infoFacilitie.facility = createBuildingHasFacilityDto[2];
    infoFacilitie.renovationDate = createBuildingHasFacilityDto[0];
    console.log(infoFacilitie);
    return await this.saveEntities(infoFacilitie)?.[0];
  }

  async createwithDto(createBuildingHasFacilityDto: UpdateBuildingHasFacilityDto):Promise<BuildingHasFacilityEntity> {

    const infoFacilitie:BuildingHasFacilityEntity = new BuildingHasFacilityEntity();
    /* Object.assign(infoFacilitie,createBuildingHasFacilityDto); */
    infoFacilitie.building = createBuildingHasFacilityDto[1];
    infoFacilitie.facility = createBuildingHasFacilityDto[2];
    infoFacilitie.renovationDate = createBuildingHasFacilityDto[0];
    console.log(infoFacilitie);
    return await this.saveEntities(infoFacilitie)?.[0];
  }

  /* // Probleme quand j'envoie plusieurs Facilities comprendre pourquoi ?
  et aussi soucis de redondance ou je créer plusieurs fois le new BuildingHasFacilityEntity()*/

  findAll():Promise<BuildingHasFacilityEntity[]>{
    return this.repository.find(
      {relations:['building','facility'] }
    );
  }

  findOne(id: number):Promise<BuildingHasFacilityEntity> {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, updateBuildingHasFacilityDto: UpdateBuildingHasFacilityDto):Promise<BuildingHasFacilityEntity> {
    const infoFacilitie:BuildingHasFacilityEntity = new BuildingHasFacilityEntity();
    Object.assign(infoFacilitie,updateBuildingHasFacilityDto);
    return await this.repository.save(infoFacilitie);
  }

  async remove(id: number):Promise<BuildingHasFacilityEntity> {
    const result = await this.findOne(id);
    await this.repository.delete(id);
    return result;
  }
}
