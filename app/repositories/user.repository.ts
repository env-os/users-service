import { AbstractRepository, EntityRepository } from "typeorm";
import { User } from "../entities/user.entity";

@EntityRepository(User)
export class UserRepository extends AbstractRepository<User>{

    public async create(user: User): Promise<void> {
        try {
            await this.repository.save(user);
        } catch(err){
            return Promise.reject(err);
        }
    }

    public async delete(user: User): Promise<void> {
        await this.repository.remove(user);
    }

    public async getAll(): Promise<User[]> {
        return await this.repository.find();
    }

    public getOneByUuid(uuid: string): Promise<User> {
        return this.repository.findOneOrFail({
            where: {uuid: uuid},
            join: {
                alias: "user",
                leftJoinAndSelect: {
                    users: "user.areas",
                }
            },
        })
    }

    public getOneByEmail(email: string): Promise<User> {
        return this.repository.findOneOrFail({
            where: {email: email},
            join: {
                alias: "user",
                leftJoinAndSelect: {
                    users: "user.areas",
                }
            },
        })
    }
}