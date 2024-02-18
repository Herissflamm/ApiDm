import { ApiProperty } from "@nestjs/swagger";

export class CreateCommonFacilityDto {
    @ApiProperty()
    name: string;
}
