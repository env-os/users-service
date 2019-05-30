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
        console.log("Received POST request for create a new user");
        const response = await this.userService.createUser(
            user.uid,
            user.username,
            user.email,
            user.fullname,
            user.phone
        )
        console.log(response);
        return res.send(response)
    }

    @Get()
    async getAll(): Promise<User[]> {
        console.log("Received GET request to view all users");
        return await this.userService.getAllUsers();
    }

    @Get('/:username')
    async getOneByUsername(@Param('username') username: string): Promise<User> {
        console.log("Received GET request to view a user");
        const response = await this.userService.getUserByUsername(username)
        console.log(response);
        return response
    }

    @Get('/exist/:username')
    async userExist(@Param('username') username: string): Promise<boolean> {
        console.log("Received GET request to know if the selected user exists");
        return await this.userService.userExist(username)
    }

    @Delete('/:username')
    async deleteUser(@Param('username') username: string, @Res() res : Response) {
        console.log("Received DELETE request to eliminate a user");
        const response = await this.userService.deleteUser(username)
        console.log(response);
        return res.send(response)
    }
}