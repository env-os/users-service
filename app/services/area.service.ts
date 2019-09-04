import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { AreaRepository } from '../repositories/area.repository';
import { AreaDTO } from '../dto/area.dto';
import { Area } from '../entities/area.entity';

Service()
export class AreaService {
    constructor(
        @InjectRepository()
        private readonly areaRepository: AreaRepository,
    ) {}

    async create(areaDto: AreaDTO): Promise<void> {
        await this.areaRepository.create(areaDto);
    }

    async delete(uuid: string) {
        await this.areaRepository.getOneByUuid(uuid)
        .then((device) => this.areaRepository.delete(device));
    }

    async getOneByUuid(uuid: string): Promise<Area> {
        return await this.areaRepository.getOneByUuid(uuid);
    }

    async getAll(): Promise<Area[]> {
        return await this.areaRepository.getAll();
    }
}
