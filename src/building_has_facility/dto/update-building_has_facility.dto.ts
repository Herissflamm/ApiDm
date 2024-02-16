import { PartialType } from '@nestjs/swagger';
import { CreateBuildingHasFacilityDto } from './create-building_has_facility.dto';

export class UpdateBuildingHasFacilityDto extends PartialType(CreateBuildingHasFacilityDto) {}
