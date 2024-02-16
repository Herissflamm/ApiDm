import { Injectable } from '@nestjs/common';
import { CreateApartmentOptionDto } from './dto/create-apartment-option.dto';
import { UpdateApartmentOptionDto } from './dto/update-apartment-option.dto';

@Injectable()
export class ApartmentOptionService {
  create(createApartmentOptionDto: CreateApartmentOptionDto) {
    return 'This action adds a new apartmentOption';
  }

  findAll() {
    return `This action returns all apartmentOption`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apartmentOption`;
  }

  update(id: number, updateApartmentOptionDto: UpdateApartmentOptionDto) {
    return `This action updates a #${id} apartmentOption`;
  }

  remove(id: number) {
    return `This action removes a #${id} apartmentOption`;
  }
}
