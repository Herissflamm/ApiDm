import { OwnerEntity } from 'src/owner/entities/owner.entity';
import { TenantEntity } from 'src/tenant/entities/tenant.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, TableInheritance } from 'typeorm';

@Entity('Person')
@TableInheritance({column: {type: "varchar", name:"type"}})
export class PersonEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  phoneNumber: string;
}
