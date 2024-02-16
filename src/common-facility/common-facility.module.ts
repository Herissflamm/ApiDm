import { Module } from '@nestjs/common';
import { CommonFacilityService } from './common-facility.service';
import { CommonFacilityController } from './common-facility.controller';

@Module({
  controllers: [CommonFacilityController],
  providers: [CommonFacilityService],
})
export class CommonFacilityModule {}
