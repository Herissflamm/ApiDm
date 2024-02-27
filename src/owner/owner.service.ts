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

@Injectable()
export class OwnerService extends BaseService<OwnerEntity> {

  constructor(
    @InjectRepository(OwnerEntity)
    private readonly repository: Repository<OwnerEntity>,
    private readonly personService:PersonService, 
    protected readonly dataSource: DataSource,
  ) {
    super(dataSource);
  }

  async create(createOwnerDto: CreateOwnerDto): Promise<OwnerEntity> {
    const owner:OwnerEntity = new OwnerEntity();
    Object.assign(owner, createOwnerDto);
    owner.tva = createOwnerDto.tva;
    owner.account = createOwnerDto.account;
    return await this.saveEntities(owner)?.[0];;
  }

  findAll() {
    return this.repository.find({
      relations:['person'],
    })
  }

  findOne(id: number) {
    return this.repository.findOne({
      where: { id },
      relations: ['person'],
    });
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
