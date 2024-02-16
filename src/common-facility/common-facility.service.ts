import { Injectable } from '@nestjs/common';
import { CreateCommonFacilityDto } from './dto/create-common-facility.dto';
import { UpdateCommonFacilityDto } from './dto/update-common-facility.dto';

@Injectable()
export class CommonFacilityService {
  create(createCommonFacilityDto: CreateCommonFacilityDto) {
    return 'This action adds a new commonFacility';
  }

  findAll() {
    return `This action returns all commonFacility`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commonFacility`;
  }

  update(id: number, updateCommonFacilityDto: UpdateCommonFacilityDto) {
    return `This action updates a #${id} commonFacility`;
  }

  remove(id: number) {
    return `This action removes a #${id} commonFacility`;
  }
}
