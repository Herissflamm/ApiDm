import { Module } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { TenantController } from './tenant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantEntity } from './entities/tenant.entity';
import { PersonModule } from 'src/person/person.module';
import { ApartmentModule } from 'src/apartment/apartment.module';

@Module({
  imports:[PersonModule,ApartmentModule, TypeOrmModule.forFeature([TenantEntity])],
  controllers: [TenantController],
  providers: [TenantService],
})
export class TenantModule {}
