import { Post, JsonController, Body, Get, Param, Delete, Req, OnUndefined, BadRequestError, HttpError, NotFoundError } from 'routing-controllers';
import { UserService } from '../services/user.service';
import { UserDto } from '../dto/user.dto';
import { User } from '../entities/user.entity';
import { LogsUtil } from '../utils/logs.util'
import { Request } from 'express';

@JsonController('/users')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}
    
    @Post()
    @OnUndefined(201)
    public async create(@Body() userDto: UserDto, @Req() req: Request): Promise<void> {
        LogsUtil.logRequest(req);
        await this.userService.create(userDto)
        .catch(() => {
            throw new BadRequestError("Error during user creation.");
        })
    }

    @Delete('/:uuid')
    @OnUndefined(201)
    public async delete(@Param('uuid') uuid: string, @Req() req: Request) {
        LogsUtil.logRequest(req);
        await this.userService.delete(uuid)
        .catch(() => {
            throw new BadRequestError();
        })
    }
    @Get()
    @OnUndefined(404)
    public async getAll(@Req() req: Request): Promise<User[]> {
        LogsUtil.logRequest(req);
        return await this.userService.getAll()
        .catch(() => {
            throw new NotFoundError();
        })
    }

    @Get('/:uuid')
    @OnUndefined(404)
    public async getOneByUuid(@Param('uuid') uuid: string, @Req() req: Request): Promise<User> {
        LogsUtil.logRequest(req);
        return await this.userService.getOneByUuid(uuid)
        .catch(() => {
            throw new NotFoundError("User not found.");
        })
    }

    @Get('/email/:email')
    @OnUndefined(404)
    public async getOneByEmail(@Param('email') email: string, @Req() req: Request): Promise<User> {
        LogsUtil.logRequest(req);
        return await this.userService.getOneByEmail(email)
        .catch(() => {
            throw new NotFoundError("User not found.");
        })
    }
}
