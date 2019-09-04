import {Entity, ManyToOne, PrimaryColumn } from "typeorm";
import {User} from "./user.entity";

@Entity("Areas")
export class Area {
    @PrimaryColumn('uuid')
    public uuid: string;

    @ManyToOne(type => User, Users => Users.areas, {nullable: false, onDelete: "CASCADE"})
    public user: User;

    constructor(uuid: string, user: User){
        this.uuid = uuid;
        this.user = user;
    }
}