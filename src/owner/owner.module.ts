import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnerEntity } from './entities/owner.entity';
import { PersonModule } from 'src/person/person.module';

@Module({
  imports:[PersonModule,TypeOrmModule.forFeature([OwnerEntity])],
  controllers: [OwnerController],
  providers: [OwnerService],
  exports:[OwnerModule],
})
export class OwnerModule {}
