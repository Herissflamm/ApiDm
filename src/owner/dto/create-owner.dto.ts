import { ApiProperty } from "@nestjs/swagger";
import { CreatePersonDto } from "src/person/dto/create-person.dto";

export class CreateOwnerDto {
    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    phoneNumber: string;
    
    @ApiProperty()
    account: number;

    @ApiProperty()
    tva: boolean;
}
