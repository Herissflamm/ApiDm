import { ApiProperty } from "@nestjs/swagger";
import { StringifyOptions } from "querystring";

export class CreatePersonDto {
    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    phoneNumber: string;
}
