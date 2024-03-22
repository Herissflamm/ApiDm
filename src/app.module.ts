import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildingModule } from './building/building.module';
import { ApartmentModule } from './apartment/apartment.module';
import { AddressModule } from './address/address.module';
import { AddressEntity } from './address/entities/address.entity';
import { CommonFacilityModule } from './common-facility/common-facility.module';
import { OwnerModule } from './owner/owner.module';
import { TenantModule } from './tenant/tenant.module';
import { ApartmentOptionModule } from './apartment-option/apartment-option.module';
import { ApartmentEntity } from './apartment/entities/apartment.entity';
import { ApartmentOptionEntity } from './apartment-option/entities/apartment-option.entity';
import { BuildingEntity } from './building/entities/building.entity';
import { CommonFacilityEntity } from './common-facility/entities/common-facility.entity';
import { OwnerEntity } from './owner/entities/owner.entity';
import { TenantEntity } from './tenant/entities/tenant.entity';
import { ApartmentTypeModule } from './apartment-type/apartment-type.module';
import { PersonModule } from './person/person.module';
import { PersonEntity } from './person/entities/person.entity';
import { BuildingHasFacilityModule } from './building_has_facility/building_has_facility.module';
import { BuildingHasFacilityEntity } from './building_has_facility/entities/building_has_facility.entity';
import { ApartmentTypeEntity } from './apartment-type/entities/apartment-type.entity';
import { ConfigModule } from '@nestjs/config';
ConfigModule.forRoot();

const db_port: number = parseInt(process.env.DB_Port)

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '', //a editer
      port: 3306,
      username: '', //a editer
      password: '', //a editer
      database: '', //a editer
      synchronize: true, 
      logging: true, 
      entities: [
        AddressEntity,
        ApartmentEntity,
        ApartmentOptionEntity,
        BuildingEntity,
        CommonFacilityEntity,
        OwnerEntity,
        TenantEntity,
        PersonEntity,
        BuildingHasFacilityEntity,
        ApartmentTypeEntity,
      ],
    }),
    BuildingModule,
    ApartmentModule,
    AddressModule,
    CommonFacilityModule,
    OwnerModule,
    TenantModule,
    ApartmentOptionModule,
    ApartmentTypeModule,
    PersonModule,
    BuildingHasFacilityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
