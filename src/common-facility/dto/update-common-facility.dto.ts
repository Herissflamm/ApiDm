import { PartialType } from '@nestjs/swagger';
import { CreateCommonFacilityDto } from './create-common-facility.dto';

export class UpdateCommonFacilityDto extends PartialType(CreateCommonFacilityDto) {}
