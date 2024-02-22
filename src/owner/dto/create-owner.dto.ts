import { ApiProperty } from "@nestjs/swagger";
import { CreatePersonDto } from "src/person/dto/create-person.dto";

export class CreateOwnerDto {
    @ApiProperty()
    person: CreatePersonDto;

    @ApiProperty()
    account: number;

    @ApiProperty()
    tva: boolean;
}
