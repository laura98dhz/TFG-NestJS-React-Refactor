import { InmueblesEntity } from "src/inmuebles/entities/inmuebles.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity({name: 'usuarios'})
export class UsuariosEntity{

    @PrimaryColumn()
    readonly nombreUsuario: string;

    @Column({type: 'varchar', length: 100, nullable: false})
    readonly contraseña: string;
    
    @Column({type: 'varchar', nullable: false})
    readonly correo: string;

    @OneToMany(() => InmueblesEntity, (inmuebleEntity) => inmuebleEntity.vendedor)
    inmuebles: InmueblesEntity[]; 
}