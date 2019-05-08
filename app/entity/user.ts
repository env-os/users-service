import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("Users")
export class User {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
        length: 50,
        unique: true,
    })
    public uid: string;

    @Column({
        type: 'varchar',
        length: 50,
        unique: true,
    })
    public username: string;

    @Column({
        type: "varchar",
        length: 150,
        unique: true,
    })
    public email: string;

    @Column({
        type: "varchar",
        length: 150,
    })
    public fullname: string;

    @Column({
        type: "varchar",
        nullable: true,
    })
    public phone: string;

    constructor(uid: string, username: string, email: string, fullname: string, phone: string = ""){
        this.uid = uid;
        this.username = username;
        this.email = email;
        this.fullname = fullname;
        this.phone = phone;
    }
}