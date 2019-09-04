import { EntityRepository, AbstractRepository } from "typeorm";
import { Area } from "../entities/area.entity";

@EntityRepository(Area)
export class AreaRepository extends AbstractRepository<Area> {

    public async create(user: Area): Promise<void> {
        await this.repository.save(user);
    }

    public async delete(user: Area): Promise<void> {
        await this.repository.remove(user);
    }

    public async getOneByUuid(uuid: string): Promise<Area> {
        return await this.repository.findOneOrFail({
            where: {uuid: uuid},
            relations: ['user'],
        });
    }

    public async getAll(): Promise<Area[]> {
        return await this.repository.find();
    }
}