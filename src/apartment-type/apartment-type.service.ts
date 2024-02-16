import { Injectable } from '@nestjs/common';
import { CreateApartmentTypeDto } from './dto/create-apartment-type.dto';
import { UpdateApartmentTypeDto } from './dto/update-apartment-type.dto';

@Injectable()
export class ApartmentTypeService {
  create(createApartmentTypeDto: CreateApartmentTypeDto) {
    return 'This action adds a new apartmentType';
  }

  findAll() {
    return `This action returns all apartmentType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apartmentType`;
  }

  update(id: number, updateApartmentTypeDto: UpdateApartmentTypeDto) {
    return `This action updates a #${id} apartmentType`;
  }

  remove(id: number) {
    return `This action removes a #${id} apartmentType`;
  }
}
