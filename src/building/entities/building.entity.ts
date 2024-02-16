import { AddressEntity } from 'src/address/entities/address.entity';
import { ApartmentEntity } from 'src/apartment/entities/apartment.entity';
import { BuildingHasFacilityEntity } from 'src/building_has_facility/entities/building_has_facility.entity';
import { CommonFacilityEntity } from 'src/common-facility/entities/common-facility.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity('building')
export class BuildingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  constructionDate: Date;

  @OneToMany(() => ApartmentEntity, (apartment) => apartment.building, {nullable : true})
  apartments: ApartmentEntity[];

  @OneToMany(
    () => BuildingHasFacilityEntity,
    (BuildingHasFacilityEntity) => BuildingHasFacilityEntity.buildings,
    {nullable : true}
  )
  facilities: CommonFacilityEntity[];

  @OneToOne(() => AddressEntity)
  @JoinColumn()
  address: AddressEntity
}
