import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { BaseService } from 'src/@core/base-service';
import { ApartmentEntity } from './entities/apartment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { BuildingEntity } from 'src/building/entities/building.entity';
import { BuildingService } from 'src/building/building.service';
import { ApartmentTypeService } from 'src/apartment-type/apartment-type.service';
import { ApartmentTypeEntity } from 'src/apartment-type/entities/apartment-type.entity';

@Injectable()
export class ApartmentService extends BaseService<ApartmentEntity>{

  constructor(
    @InjectRepository(ApartmentEntity)
    protected readonly repository: Repository<ApartmentEntity>,
    protected readonly buildingService: BuildingService,
    protected readonly apartmentTypeService: ApartmentTypeService,
    protected readonly dataSource: DataSource,
  ){
    super(dataSource);
  }

  async create(createApartmentDto: CreateApartmentDto, BuildingId: number, TypeId:number): Promise<ApartmentEntity> {
    const apartment:ApartmentEntity = new ApartmentEntity();
    Object.assign(apartment,createApartmentDto);
    const building:BuildingEntity = await this.buildingService.findOne(BuildingId)
    const apartmentType:ApartmentTypeEntity = await this.apartmentTypeService.findOne(TypeId);

    if (!building) {
      throw new Error('Building not found');
    }
    if (!apartmentType){
      throw new Error('Apartment type not found');
    }
    apartment.building = building;
    apartment.type = apartmentType;
    return (await this.saveEntities(apartment))?.[0];
  }

  async findAll(): Promise<ApartmentEntity[]> {
    try {
        const apartments: ApartmentEntity[] = await this.repository.find({
            relations: ['building', 'type'], // Inclure les relations "building" et "type"
        });
        return apartments;
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération de tous les appartements avec les relations :", error);
        throw error;
    }
}


  async findOne(id: number):Promise<ApartmentEntity> {
    const result:ApartmentEntity = await this.repository.findOne({
      where: {id},
      relations: ['type', 'building'],
    })
    return result;
  }

  async update(id: number, updateApartmentDto: UpdateApartmentDto): Promise<ApartmentEntity> {
    const apartment: ApartmentEntity = await this.repository.findOne({ where: { id } });
    if (!apartment) {
        throw new NotFoundException('Apartment not found');
    }

    if (updateApartmentDto.buildingId && (!apartment.building || updateApartmentDto.buildingId !== apartment.building.id)) {
        const building = await this.buildingService.findOne(updateApartmentDto.buildingId);
        apartment.building = building;
    }

    if (updateApartmentDto.apartmentTypeId && (!apartment.type || updateApartmentDto.apartmentTypeId !== apartment.type.id)) {
        const type = await this.apartmentTypeService.findOne(updateApartmentDto.apartmentTypeId);
        apartment.type = type;
    }

    Object.assign(apartment, updateApartmentDto);
    return await this.repository.save(apartment);
}


  async remove(id: number): Promise<ApartmentEntity> {
    const result = await this.findOne(id);
    await this.repository.delete(id);
    return result;
  }
}
