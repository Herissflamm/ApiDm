import { Injectable } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { OwnerEntity } from 'src/owner/entities/owner.entity';
import { BaseService } from 'src/@core/base-service';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { PersonService } from 'src/person/person.service';
import { PersonEntity } from 'src/person/entities/person.entity';
import { TenantEntity } from './entities/tenant.entity';
import { ApartmentEntity } from 'src/apartment/entities/apartment.entity';
import { ApartmentService } from 'src/apartment/apartment.service';

@Injectable()
export class TenantService extends BaseService<PersonEntity>{


  constructor(
    @InjectRepository(TenantEntity)
    private readonly repository: Repository<TenantEntity>,
    private readonly personService:PersonService, 
    protected readonly dataSource: DataSource,
    protected readonly apartmentService: ApartmentService,
  ) {
    super(dataSource);
  }

  async create(createTenantDto: CreateTenantDto) {
    const personEntity:TenantEntity = new TenantEntity();
    Object.assign(personEntity, createTenantDto);
    const apartment = await this.apartmentService.findOne(createTenantDto.apartmentId);
    personEntity.apartment = apartment;
    await this.saveEntity(personEntity).then(async resultat =>{
      const id = resultat.id;
      const person = await this.personService.findOne(id);
      if(apartment != null){
        if(apartment.principalTenant == undefined){
          const appart = await this.apartmentService.addPrincipalTenant(apartment, person);
          const personEntity:TenantEntity = new TenantEntity();
          Object.assign(personEntity, resultat);
          personEntity.apartment = appart;
          await this.repository.save(personEntity);
        }   
      }
    });
  }

  findAll() {
    return this.repository.find({
      relations:['apartment'],
    })
  }

  findOne(id: number) {
    return this.repository.findOne({
      where: { id },
      relations: ['apartment'],
    });
  }

  findAllInApartment(id: ApartmentEntity) {
    return this.repository.find({
      where: { 
        apartment : id, 
      },
      relations:['apartment'],
    })
  }

  async update(id: number, updateTenantDto: UpdateTenantDto) {
    const tenant = await this.findOne(id);
    const apartmentOld = await this.apartmentService.findOne(tenant.apartment.id);
    const apartmentNew = await this.apartmentService.findOne(updateTenantDto.apartmentId);
    Object.assign(tenant, updateTenantDto);
    tenant.apartment = apartmentNew;
    await this.repository.save(tenant);
    if(apartmentOld.principalTenant.id == id && updateTenantDto.apartmentId != apartmentOld.id){      
      const allTenant = await this.findAllInApartment(apartmentOld);
      await this.apartmentService.addPrincipalTenant(apartmentOld, allTenant[0]);
    }
    if(apartmentNew != null){
      if(apartmentNew.principalTenant == undefined){
        await this.apartmentService.addPrincipalTenant(apartmentNew, tenant);
      }
    }
  }

  async remove(id: number) {
    const result = await this.findOne(id);
    await this.repository.delete(id);
    return result;
  }
}
