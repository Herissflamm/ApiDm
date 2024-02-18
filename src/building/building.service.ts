import { Injectable , NotFoundException } from '@nestjs/common';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';
import { BaseService } from 'src/@core/base-service';
import { BuildingEntity } from './entities/building.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { AddressService } from 'src/address/address.service';
import { CommonFacilityService } from 'src/common-facility/common-facility.service';



@Injectable()
export class BuildingService extends BaseService<BuildingEntity> {

  constructor(
    @InjectRepository(BuildingEntity)
    private readonly buildingRepository: Repository<BuildingEntity>,
    private readonly addressService: AddressService,
    protected readonly dataSource: DataSource,
  ){
    super(dataSource);
  }
  
  async create(createBuildingDto: CreateBuildingDto): Promise<BuildingEntity> {
    
    const building = new BuildingEntity();
    Object.assign(building, createBuildingDto);
    const address = await this.addressService.create(createBuildingDto.createAddressDto);
    
    building.address = address;
    return await this.saveEntities(building)?.[0];
  }
  

  findAll():Promise<BuildingEntity[]> {
    return this.buildingRepository.find();
  }

  findOne(id: number):Promise<BuildingEntity> {
    return this.buildingRepository.findOneBy({ id });
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
