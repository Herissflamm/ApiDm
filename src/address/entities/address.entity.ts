import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Address')
export class AddressEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  streetNumber: number;
  @Column()
  street: string;
  @Column()
  zipCode: string;
  @Column()
  city: string;
}
