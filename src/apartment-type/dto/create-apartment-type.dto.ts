import { ApiProperty } from "@nestjs/swagger";

export class CreateApartmentTypeDto {
    @ApiProperty()
    name:string;

    @ApiProperty()
    capacity:number;
}
