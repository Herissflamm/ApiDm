import { ApiProperty } from "@nestjs/swagger";
import { BuildingEntity } from "src/building/entities/building.entity";
import { CommonFacilityEntity } from "src/common-facility/entities/common-facility.entity";

export class CreateBuildingHasFacilityDto {
    @ApiProperty()
    renovationDate: Date;

    @ApiProperty()
    building: BuildingEntity;

    @ApiProperty()
    facility: CommonFacilityEntity;
}
