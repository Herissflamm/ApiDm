import { ApiProperty } from "@nestjs/swagger";
import { CreateAddressDto } from "src/address/dto/create-address.dto";

export class CreateBuildingDto {
    @ApiProperty()
    constructionDate: Date;
    
    @ApiProperty({ type: CreateAddressDto }) // Ajoutez une propriété createAddressDto de type CreateAddressDto
    createAddressDto: CreateAddressDto;
}
