import {Entity, Column, PrimaryColumn, OneToMany} from "typeorm";
import { Area } from "./area.entity"

@Entity("Users")
export class User {
    @PrimaryColumn('varchar')
    public uuid: string;

    @Column({type: 'varchar', length: 50, unique: true})
    public username: string;

    @Column({type: "varchar", length: 150, unique: true})
    public email: string;

    @Column({type: "varchar", length: 150, unique: false})
    public fullname: string;

    @Column({type: "varchar", nullable: true})
    public phone: string;

    @OneToMany(type => Area, area => area.user)
    public areas: Area[];

    constructor(uuid: string, username: string, email: string, fullname: string, phone: string, areas: Area[]){
        if(this.hasWhiteSpace(username)){
            throw Error("The username cannot have blank spaces.");
        }
        this.uuid = uuid;
        this.username = username;
        this.email = email;
        this.fullname = fullname;
        this.phone = phone;
        this.areas = areas;
    }

    hasWhiteSpace(value: string) {
        return /\s/g.test(value);
    }
}