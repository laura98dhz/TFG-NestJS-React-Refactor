import { InmueblesEntity } from "../../inmuebles/entities/inmuebles.entity"; 
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Imagenes'})
export class ImagenesEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', nullable: false})
    filename: string;

    @ManyToOne(() => InmueblesEntity, (inmuebleEntity) => inmuebleEntity.id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    @JoinColumn({name: "inmueble_id"})
    inmueble_id: number

}
