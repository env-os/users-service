import { AbstractRepository, EntityRepository } from "typeorm";
import { User } from "../entities/user.entity";

@EntityRepository(User)
export class UserRepository extends AbstractRepository<User>{

    public async create(user: User): Promise<void> {
        await this.repository.save(user);
    }

    public async delete(user: User): Promise<void> {
        await this.repository.remove(user);
    }

    public async getAll(): Promise<User[]> {
        return await this.repository.find();
    }

    public getOneByUsername(username: string): Promise<User | undefined>{
        return this.repository.findOne({
            where: { username: username }
        })
    }

}