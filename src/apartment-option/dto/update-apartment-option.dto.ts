import { PartialType } from '@nestjs/swagger';
import { CreateApartmentOptionDto } from './create-apartment-option.dto';

export class UpdateApartmentOptionDto extends PartialType(CreateApartmentOptionDto) {}
