import { ApiProperty } from '@nestjs/swagger';
import { ApartmentEntity } from 'src/apartment/entities/apartment.entity';
import { PersonEntity } from 'src/person/entities/person.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne ,ChildEntity, JoinColumn} from 'typeorm';


@ChildEntity('Owner')
export class OwnerEntity extends PersonEntity {
  @Column()
  account: number;

  @Column()
  tva: boolean;

  @ApiProperty({ default : 0})
  rentGet: number;

  @OneToMany(() => ApartmentEntity, (apartment) => apartment.owner)
  apartments: ApartmentEntity[];

}
