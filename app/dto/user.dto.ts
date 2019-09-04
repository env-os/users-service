import { Area } from "../entities/area.entity";

export class UserDto{
    readonly uuid!: string;
    readonly username!: string;
    readonly email!: string;
    readonly fullname!: string;
    readonly phone!: string;
    readonly areas!: Area[];
}