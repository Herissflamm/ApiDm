import { Injectable , NotFoundException } from '@nestjs/common';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';
import { BaseService } from 'src/@core/base-service';
import { BuildingEntity } from './entities/building.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { AddressService } from 'src/address/address.service';



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

  update(id: number, updateBuildingDto: UpdateBuildingDto) {
    return `This action updates a #${id} building`;
  }

  remove(id: number) {
    return `This action removes a #${id} building`;
  }
}
