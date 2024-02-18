import { ApiProperty } from "@nestjs/swagger";
import { CreateAddressDto } from "src/address/dto/create-address.dto";
import { AssociateFacilityDto } from "src/common-facility/dto/associate-facility.dto";

export class CreateBuildingDto {
    @ApiProperty()
    constructionDate: Date;
    
    @ApiProperty({ type: CreateAddressDto }) // Ajoutez une propriété createAddressDto de type CreateAddressDto
    createAddressDto: CreateAddressDto;

    @ApiProperty({type: AssociateFacilityDto})
    facilities: AssociateFacilityDto[];

}
