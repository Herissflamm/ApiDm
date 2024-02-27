import { ApiProperty } from "@nestjs/swagger";
import { ApartmentEntity } from "src/apartment/entities/apartment.entity";
import { CreatePersonDto } from "src/person/dto/create-person.dto";

export class CreateTenantDto {
    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    phoneNumber: string;

    @ApiProperty()
    apartmentId: number;
    
}