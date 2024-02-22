import { ApartmentEntity } from 'src/apartment/entities/apartment.entity';
import { PersonEntity } from 'src/person/entities/person.entity';
import { OneToOne, JoinColumn, Column, ManyToOne, ChildEntity } from 'typeorm';


@ChildEntity('Tenant')
export class TenantEntity extends PersonEntity {
  
  @Column()
  isPrincipal: boolean;
  
  @ManyToOne(() => ApartmentEntity, (apartment) => apartment.tenants)
  apartment: ApartmentEntity;

  @OneToOne(()=> PersonEntity)
  @JoinColumn()
  person:PersonEntity;
}
