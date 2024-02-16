import { ApartmentEntity } from 'src/apartment/entities/apartment.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity('Apartement_type')
export class ApartmentTypeEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    capacity: number;

    @OneToMany(() => ApartmentEntity , apartment => apartment.type)
    apartments: ApartmentEntity[];
}
