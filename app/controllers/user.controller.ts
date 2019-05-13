import { Post, JsonController, Body, Get, Res, Param, Delete } from 'routing-controllers';
import { UserService } from '../services/user.service';
import { UserDto } from '../dto/user.dto';
import { User } from '../entities/user.entity';
import { Response } from 'express';

@JsonController('/users')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}
    
    @Post()
    async create(@Body() user: UserDto, @Res() res : Response) {
        const response = await this.userService.createUser(
            user.uid,
            user.username,
            user.email,
            user.fullname,
            user.phone
        )
        return res.send(response)
    }

    @Get()
    async getAll(): Promise<User[]> {
        return await this.userService.getAllUsers();
    }

    @Get('/:username')
    async getOneByUsername(@Param('username') username: string): Promise<User> {
        const response = await this.userService.getUserByUsername(username)
        return response
    }

    @Get('/exist/:username')
    async userExist(@Param('username') username: string): Promise<boolean> {
        return await this.userService.userExist(username)
    }

    @Delete('/:username')
    async deleteUser(@Param('username') username: string, @Res() res : Response) {
        const response = await this.userService.deleteUser(username)
        return res.send(response)
    }
}