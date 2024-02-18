import { Module } from '@nestjs/common';
import { ApartmentTypeService } from './apartment-type.service';
import { ApartmentTypeController } from './apartment-type.controller';
import { AddressModule } from 'src/address/address.module';
import { ApartmentModule } from 'src/apartment/apartment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApartmentTypeEntity } from './entities/apartment-type.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ApartmentTypeEntity])],
  controllers: [ApartmentTypeController],
  providers: [ApartmentTypeService],
  exports:[ApartmentTypeService]
})
export class ApartmentTypeModule {}
