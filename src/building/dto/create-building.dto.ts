import { ApiProperty } from "@nestjs/swagger";
import { isEmpty } from "rxjs";
import { CreateAddressDto } from "src/address/dto/create-address.dto";
import { AssociateFacilityDto } from "src/building_has_facility/dto/associate-facility.dto";
import { CreateBuildingHasFacilityDto } from "src/building_has_facility/dto/create-building_has_facility.dto";

export class CreateBuildingDto {
    @ApiProperty()
    constructionDate: Date;
    
    @ApiProperty({ type: CreateAddressDto })
    createAddressDto: CreateAddressDto;

    @ApiProperty({type: [CreateBuildingHasFacilityDto], minItems: 1})
    facilities: CreateBuildingHasFacilityDto[];

}
