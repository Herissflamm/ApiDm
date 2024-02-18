import { Module } from '@nestjs/common';
import { ApartmentOptionService } from './apartment-option.service';
import { ApartmentOptionController } from './apartment-option.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApartmentOptionEntity } from './entities/apartment-option.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ApartmentOptionEntity])],
  controllers: [ApartmentOptionController],
  providers: [ApartmentOptionService],
  exports:[ApartmentOptionService]
})
export class ApartmentOptionModule {}
