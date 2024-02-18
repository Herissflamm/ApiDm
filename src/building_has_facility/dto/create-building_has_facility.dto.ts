import { ApiProperty } from "@nestjs/swagger";

export class CreateBuildingHasFacilityDto {
    @ApiProperty()
    facilityID: number;

    @ApiProperty()
    renovationDate: Date;
}
