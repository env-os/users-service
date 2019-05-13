import { Repository, EntityRepository } from "typeorm";
import { User } from "../entities/user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User>{

    public getOneByUsername(username: string): Promise<User>{
        return this.findOne({ username })
    }

}