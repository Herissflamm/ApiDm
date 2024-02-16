import { Module } from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { ApartmentController } from './apartment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApartmentEntity } from './entities/apartment.entity';
import { BuildingModule } from 'src/building/building.module';
import { AddressModule } from 'src/address/address.module';

@Module({
  imports: [BuildingModule ,AddressModule,TypeOrmModule.forFeature([ApartmentEntity])],
  controllers: [ApartmentController],
  providers: [ApartmentService],
  exports:[ApartmentService]
})
export class ApartmentModule {}
