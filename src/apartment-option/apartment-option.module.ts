import { Module } from '@nestjs/common';
import { ApartmentOptionService } from './apartment-option.service';
import { ApartmentOptionController } from './apartment-option.controller';

@Module({
  controllers: [ApartmentOptionController],
  providers: [ApartmentOptionService],
})
export class ApartmentOptionModule {}
