import { Module } from '@nestjs/common';
import { ApartmentTypeService } from './apartment-type.service';
import { ApartmentTypeController } from './apartment-type.controller';

@Module({
  controllers: [ApartmentTypeController],
  providers: [ApartmentTypeService],
})
export class ApartmentTypeModule {}
