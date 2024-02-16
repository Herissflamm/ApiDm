import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { DataSource, Repository } from 'typeorm';
import { BaseService } from 'src/@core/base-service';


@Injectable()
export class AddressService extends BaseService<AddressEntity> {

  constructor(
    @InjectRepository(AddressEntity)
    protected readonly repository: Repository<AddressEntity>,
    protected readonly dataSource: DataSource,
  ){
    super(dataSource);
  }

  async create(createAddressDto: CreateAddressDto): Promise<AddressEntity> {
    const address = new AddressEntity();
    Object.assign(address, createAddressDto);
    return (await this.saveEntities(address))?.[0];
  }

  findAll():Promise<AddressEntity[]> {
    return this.repository.find();
  }

  findOne(id: number):Promise<AddressEntity> {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, updateAddressDto: UpdateAddressDto):Promise<AddressEntity> {
    // Récupérer l'adresse existante depuis la base de données
    const address = await this.repository.findOne({ where: { id } });
    if (!address) {
      throw new NotFoundException('Adresse introuvable');
    }
    Object.assign(address, updateAddressDto);
    return this.repository.save(address);
  }

  async deleteAddress(id: number): Promise<AddressEntity> {
    const result = await this.findOne(id);
    await this.repository.delete(id);
    return result;
  }
}
