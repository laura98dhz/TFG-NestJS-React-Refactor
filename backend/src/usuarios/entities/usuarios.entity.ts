import { InmueblesEntity } from "src/inmuebles/entities/inmuebles.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity({name: 'usuarios'})
export class UsuariosEntity{

    @PrimaryColumn()
    nombreUsuario: string;

    @Column({type: 'varchar', length: 100, nullable: false})
    contraseña: string;
    
    @Column({type: 'varchar', nullable: false})
    correo: string;

    @OneToMany(() => InmueblesEntity, (inmuebleEntity) => inmuebleEntity.vendedor)
    inmuebles: InmueblesEntity[]; 
}