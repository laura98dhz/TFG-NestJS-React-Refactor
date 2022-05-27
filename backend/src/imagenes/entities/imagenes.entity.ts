import { InmueblesEntity } from "../../inmuebles/entities/inmuebles.entity"; 
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Imagenes'})
export class ImagenesEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', nullable: false})
    nombre: string;

    @Column({type: 'varchar', nullable: false})
    tipo: string;

    @Column({type: "longblob", nullable: false})
    data: string;

    @ManyToOne(() => InmueblesEntity, (inmueblesEntity) => inmueblesEntity.id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    @JoinColumn({ name: 'inmueble_id' })
    inmueble_id: InmueblesEntity;
}
