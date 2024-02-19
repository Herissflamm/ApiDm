import { ApiProperty } from "@nestjs/swagger";
import { AssociateFacilityDto } from "src/building_has_facility/dto/associate-facility.dto";
import { CreateBuildingHasFacilityDto } from "src/building_has_facility/dto/create-building_has_facility.dto";


export class AddFacilityDto {
    
    @ApiProperty({type: [AssociateFacilityDto], minItems: 1})
    facilities: AssociateFacilityDto[];

}