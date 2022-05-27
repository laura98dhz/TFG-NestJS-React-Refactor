import { InmueblesEntity } from "../../inmuebles/entities/inmuebles.entity"; 
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Imagenes'})
export class ImagenesEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', nullable: false})
    filename: string;

    @Column({type: 'varchar', nullable: false})
    path: string;

    @ManyToOne(() => InmueblesEntity, (inmuebleEntity) => inmuebleEntity.id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    @JoinColumn({name: "inmueble"})
    inmueble: InmueblesEntity

}
