import { BuildingEntity } from 'src/building/entities/building.entity';
import { BuildingHasFacilityEntity } from 'src/building_has_facility/entities/building_has_facility.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
    OneToMany
  } from 'typeorm';
  
  
  @Entity('CommonFacility')
  export class CommonFacilityEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column({ nullable: true })
    lastInspectionDate: Date;

    @OneToMany(
      () => BuildingHasFacilityEntity,
      (BuildingHasFacilityEntity) => BuildingHasFacilityEntity.facilities
    )
    buildings: CommonFacilityEntity[];
  }
  