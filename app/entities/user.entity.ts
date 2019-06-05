import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity("Users")
export class User {
    @PrimaryColumn('uuid')
    public uuid: string;

    @Column({type: 'varchar', length: 50, unique: true})
    public username: string;

    @Column({type: "varchar", length: 150, unique: true})
    public email: string;

    @Column({type: "varchar", length: 150, unique: false})
    public fullname: string;

    @Column({type: "varchar", nullable: true})
    public phone: string;

    constructor(uuid: string, username: string, email: string, fullname: string, phone: string){
        if(this.hasWhiteSpace(username)){
            throw Error("The username cannot have blank spaces.");
        }
        this.uuid = uuid;
        this.username = username;
        this.email = email;
        this.fullname = fullname;
        this.phone = phone;
    }

    hasWhiteSpace(value: string) {
        return /\s/g.test(value);
    }
}