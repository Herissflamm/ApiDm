import { ApiProperty } from "@nestjs/swagger";


export class AssociateFacilityDto {
    @ApiProperty()
    facilityId: number;
    
    @ApiProperty({nullable:true})
    renovationDate: Date | null;
}
