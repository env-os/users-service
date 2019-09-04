import { Request } from 'express'
import { JsonController, Post, OnUndefined, Body, Req, Param, Delete, Get, BadRequestError, NotFoundError } from 'routing-controllers';
import { AreaService } from '../services/area.service'
import { LogsUtil } from '../utils/logs.util';
import { AreaDTO } from '../dto/area.dto';
import { Area } from '../entities/area.entity';


@JsonController('/areas')
export class AreaController {
    constructor(private readonly areaService: AreaService) {}

    @Post()
    @OnUndefined(201)
    async create(@Body() areaDTO: AreaDTO, @Req() req: Request): Promise<void> {
        LogsUtil.logRequest(req);
        await this.areaService.create(areaDTO)
        .catch(() => {
            throw new BadRequestError();
        })
    }

    @Delete('/:uuid')
    @OnUndefined(201)
    async delete(@Param('uuid') uuid: string, @Req() req: Request) {
        LogsUtil.logRequest(req);
        await this.areaService.delete(uuid)
        .catch(() => {
            throw new BadRequestError();
        })
    }

    @Get('/:uuid')
    @OnUndefined(404)
    async getOneByUuid(@Param('uuid') uuid: string, @Req() req: Request): Promise<Area> {
        LogsUtil.logRequest(req);
        return await this.areaService.getOneByUuid(uuid)
        .catch(() => {
            throw new NotFoundError();
        })
    }

    @Get()
    @OnUndefined(404)
    async getAll(@Req() req: Request): Promise<Area[]> {
        LogsUtil.logRequest(req);
        return await this.areaService.getAll()
        .catch(() => {
            throw new NotFoundError();
        })
    }
}