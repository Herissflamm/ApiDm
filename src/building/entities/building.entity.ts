import { AddressEntity } from 'src/address/entities/address.entity';
import { ApartmentEntity } from 'src/apartment/entities/apartment.entity';
import { BuildingHasFacilityEntity } from 'src/building_has_facility/entities/building_has_facility.entity';
import { CommonFacilityEntity } from 'src/common-facility/entities/common-facility.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity('building')
export class BuildingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  constructionDate: Date;

  @OneToMany(() => ApartmentEntity, (apartment) => apartment.building, {nullable : true})
  apartments: ApartmentEntity[];

  @ManyToMany(()=>CommonFacilityEntity,facilitie => facilitie.buildings)
  @JoinTable()
  facilities:CommonFacilityEntity[];

  @OneToOne(() => AddressEntity)
  @JoinColumn()
  address: AddressEntity
}
