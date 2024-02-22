import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PersonEntity } from './entities/person.entity';
import { BaseService } from 'src/@core/base-service';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PassThrough } from 'stream';

@Injectable()
export class PersonService extends BaseService<PersonEntity> {

  constructor(
    @InjectRepository(PersonEntity)
    protected readonly repository: Repository<PersonEntity>,
    protected readonly dataSource: DataSource,
  ){
    super(dataSource);
  }

  async create(createPersonDto: CreatePersonDto):Promise<PersonEntity> {
    const person = new PersonEntity();
    Object.assign(person, createPersonDto);
    return await this.saveEntities(person)?.[0];
  }

  findAll():Promise<PersonEntity[]> {
    return this.repository.find();
  }

  findOne(id: number):Promise<PersonEntity> {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, updatePersonDto: UpdatePersonDto):Promise<PersonEntity> {
    const person:PersonEntity = await this.repository.findOne({where: {id}});
    if (!person){
      throw new NotFoundException('Person not found');
    }
    Object.assign(person, updatePersonDto);
    return await this.repository.save(person);
  }

  async remove(id: number) {
    const result = await this.findOne(id);
    await this.repository.delete(id);
    return result;
  }
}
