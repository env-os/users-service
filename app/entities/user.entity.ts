import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("Users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    public uuid!: number;

    @Column({type: 'varchar',length: 50,unique: true})
    public username: string;

    @Column({type: "varchar", length: 150, unique: true})
    public email: string;

    @Column({type: "varchar", length: 150})
    public fullname: string;

    @Column({type: "varchar", nullable: true})
    public phone: string;

    constructor(username: string, email: string, fullname: string, phone: string = ""){
        this.username = username;
        this.email = email;
        this.fullname = fullname;
        this.phone = phone;
    }
}