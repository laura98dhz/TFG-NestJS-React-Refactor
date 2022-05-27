import { UsuariosEntity } from "../../usuarios/entities/usuarios.entity"; 
import { ImagenesEntity } from "src/imagenes/entities/imagenes.entity"; 
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Inmuebles'})
export class InmueblesEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 15, nullable: false})
    ubicacion: string;

    @Column({type: 'varchar', length: 15, nullable: false})
    tipoInmueble: string;

    @Column({type: 'varchar', length: 15, nullable: false})
    tipoOperacion: string;

    @ManyToOne(() => UsuariosEntity, (usuariosEntity) => usuariosEntity.nombreUsuario, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    @JoinColumn({name: "nombreVendedor"})
    vendedor: UsuariosEntity;

    @Column({type: 'int', nullable: false})
    superficie: number;

    @Column({type: 'int', nullable: false})
    habitaciones: number;

    @Column({type: 'int', nullable: false})
    baños: number;

    @Column({type: 'int', nullable: false})
    precio: number;

    @Column({type: 'varchar', length: 15, nullable: false})
    descripcion: string;

    @OneToMany(() => ImagenesEntity, (imagenesEntity) => imagenesEntity.inmueble)
    imagenes: Array<ImagenesEntity>; 
}
