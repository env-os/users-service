import { Post, JsonController, Body, Get, Res, Param, Delete, Req, OnUndefined } from 'routing-controllers';
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
    async create(@Body() userDto: UserDto, @Req() req: Request): Promise<void> {
        LogsUtil.logRequest(req);
        await this.userService.create(userDto);
    }

    @Delete('/:username')
    @OnUndefined(201)
    async delete(@Param('username') username: string, @Req() req: Request) {
        LogsUtil.logRequest(req);
        await this.userService.delete(username);
    }
    @Get()
    @OnUndefined(404)
    async getAll(@Req() req: Request): Promise<User[]> {
        LogsUtil.logRequest(req);
        return await this.userService.getAll();
    }

    @Get('/:username')
    @OnUndefined(404)
    async getOneByUsername(@Param('username') username: string, @Req() req: Request): Promise<User | undefined> {
        LogsUtil.logRequest(req);
        return await this.userService.getOneByUsername(username);
    }


    @Get('/exist/:username')
    @OnUndefined(404)
    async userExist(@Param('username') username: string, @Req() req: Request): Promise<boolean> {
        LogsUtil.logRequest(req);
        return await this.userService.userExist(username)
    }
}