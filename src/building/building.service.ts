import { Injectable , NotFoundException } from '@nestjs/common';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';
import { BaseService } from 'src/@core/base-service';
import { BuildingEntity } from './entities/building.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { AddressService } from 'src/address/address.service';
import { CommonFacilityService } from 'src/common-facility/common-facility.service';
import { BuildingHasFacilityService } from 'src/building_has_facility/building_has_facility.service';
import { BuildingHasFacilityEntity } from 'src/building_has_facility/entities/building_has_facility.entity';
import { CommonFacilityEntity } from 'src/common-facility/entities/common-facility.entity';



@Injectable()
export class BuildingService extends BaseService<BuildingEntity> {

  constructor(
    @InjectRepository(BuildingEntity)
    private readonly buildingRepository: Repository<BuildingEntity>,
    private readonly addressService: AddressService,
    private readonly facilityService:BuildingHasFacilityService,
    private readonly commonService:CommonFacilityService,
    protected readonly dataSource: DataSource,
  ){
    super(dataSource);
  }
  
  async create(createBuildingDto: CreateBuildingDto): Promise<BuildingEntity> {
    
    const building = new BuildingEntity();
    Object.assign(building, createBuildingDto);
    const address = await this.addressService.create(createBuildingDto.createAddressDto);
    building.address = address;
    
    const buildFacilities:CommonFacilityEntity[]=[];
    console.log(createBuildingDto);
    for(const facilityId of createBuildingDto.facilities){
      const facility = await this.commonService.findOne(facilityId.facilityID);
      if (facility){
        buildFacilities.push(facility);
        const buldingHasFacility : BuildingHasFacilityEntity = new BuildingHasFacilityEntity();
        if (facilityId.renovationDate){
          const data = [facilityId.renovationDate,building.id,facilityId.facilityID]
          console.log(data);
          Object.assign(buldingHasFacility,data);
          await this.facilityService.saveEntities(buldingHasFacility)
        }else{
          const data = [createBuildingDto.constructionDate,building.id,facilityId.facilityID]
          console.log(data);
          Object.assign(buldingHasFacility, data);
          await this.facilityService.saveEntities(buldingHasFacility)
        }

      }else {
        throw new NotFoundException(`Common Facility with ID ${facilityId} not found`);
    }
    }

    building.facilities= buildFacilities

    return await this.saveEntities(building)?.[0];
  }

  /*Le probleme c'est que l'id du building n'est pas encore définis car on l'as pas encore enregistré en base donc pas d'id dans la const data
  a voir si avec async et enregistré le building pendant la fonction pour avoir son id ou faire la fonction en deux fois a voir 
  Voir sur internet si il y a une autre méthode
  */
  

  findAll():Promise<BuildingEntity[]> {
    return this.buildingRepository.find({
      relations: ['facilities','address'],
    });
  }

  findOne(id: number):Promise<BuildingEntity> {
    return this.buildingRepository.findOne({
      where: {id},
      relations: ['facilities','address'],
    }) 
  }

  async update(id: number, updateBuildingDto: UpdateBuildingDto): Promise<BuildingEntity> {
    const building = await this.buildingRepository.findOne({where: {id}})
    if (!building){
      throw new NotFoundException('Batiment introuvable');
    }
    Object.assign(building, updateBuildingDto);
    return this.buildingRepository.save(building);
  }

  async remove(id: number): Promise<BuildingEntity> {
    const result = await this.findOne(id);
    await this.buildingRepository.delete(id);
    return result;
  }
}
