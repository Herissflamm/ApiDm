import { ApiProperty } from "@nestjs/swagger";

export class CreateApartmentOptionDto {
    @ApiProperty()
    name: string;
}
