import { ApartmentEntity } from 'src/apartment/entities/apartment.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
  } from 'typeorm';
 
  
  @Entity('ApartmentOption')
  export class ApartmentOptionEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
  }
  