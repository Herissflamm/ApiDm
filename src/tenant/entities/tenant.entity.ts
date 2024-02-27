import { ApartmentEntity } from 'src/apartment/entities/apartment.entity';
import { PersonEntity } from 'src/person/entities/person.entity';
import { OneToOne, JoinColumn, Column, ManyToOne, ChildEntity } from 'typeorm';


@ChildEntity('Tenant')
export class TenantEntity extends PersonEntity {
  
  @ManyToOne(() => ApartmentEntity, (apartment) => apartment.tenants)
  apartment: ApartmentEntity;

}
