import { ApartmentOptionEntity } from 'src/apartment-option/entities/apartment-option.entity';
import { ApartmentTypeEntity } from 'src/apartment-type/entities/apartment-type.entity';
import { BuildingEntity } from 'src/building/entities/building.entity';
import { OwnerEntity } from 'src/owner/entities/owner.entity';
import { PersonEntity } from 'src/person/entities/person.entity';
import { TenantEntity } from 'src/tenant/entities/tenant.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn,ManyToMany, JoinTable, OneToOne, JoinColumn } from 'typeorm';


@Entity('Apartement')
export class ApartmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  floor: number;

  @Column()
  door: number;

  @OneToOne(()=> PersonEntity)
  @JoinColumn()
  principalTenant:PersonEntity;
    
  @ManyToOne(() => BuildingEntity, building => building.apartments)
  building: BuildingEntity;
  
  @ManyToOne(()=> ApartmentTypeEntity, apartmentType => apartmentType.apartments)
  type: ApartmentTypeEntity;

  @ManyToOne(() => OwnerEntity, owner => owner.apartments)
  owner: OwnerEntity;

  @OneToMany(() => TenantEntity, tenant => tenant.apartment)
  tenants: TenantEntity[];

  @ManyToMany(() => ApartmentOptionEntity)
    @JoinTable()
    options: ApartmentOptionEntity[]
}
