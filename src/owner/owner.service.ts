import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { OwnerEntity } from './entities/owner.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { BaseService } from 'src/@core/base-service'; 
import { PersonEntity } from 'src/person/entities/person.entity';
import { PersonModule } from 'src/person/person.module';
import { PersonService } from 'src/person/person.service';
import { ApartmentService } from 'src/apartment/apartment.service';

@Injectable()
export class OwnerService extends BaseService<OwnerEntity> {

  constructor(
    @InjectRepository(OwnerEntity)
    private readonly repository: Repository<OwnerEntity>,
    private readonly personService:PersonService, 
    protected readonly dataSource: DataSource,
    protected readonly apartmentService: ApartmentService,
  ) {
    super(dataSource);
  }

  async create(createOwnerDto: CreateOwnerDto){
    const owner:OwnerEntity = new OwnerEntity();
    Object.assign(owner, createOwnerDto);
    const apartment = await this.apartmentService.findOne(createOwnerDto.apartmentId);
    owner.tva = createOwnerDto.tva;
    owner.account = createOwnerDto.account;
    await this.saveEntity(owner).then(async resultat =>{
      if(apartment != null){
        await this.apartmentService.addNewOwner(apartment,resultat);
      }
    });
  }

  findAll() {
    return this.repository.find({
      relations:['apartments'],
    })
  }

  async findOne(id: number) {
    const result = await this.repository.findOne({
      where: { id },
      relations: ['apartments'],
    });

    let rent = 0;
    for(let i = 0; i < result.apartments.length; i++){
      let apartment = await this.apartmentService.findOne(result.apartments[i].id);
      rent += apartment.rent*apartment.tenants.length;
      if(apartment.principalTenant!=undefined){
        rent += apartment.rent;
      }
    }
    result.rentGet = rent;
    return result;
  }

  async update(id: number, updateOwnerDto: UpdateOwnerDto) {
    const owner = await this.repository.findOne({ where: { id } });
  }

  async remove(id: number) {
    const result = await this.findOne(id);
    await this.repository.delete(id);
    return result;
  }
}
