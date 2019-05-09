import { IsString, IsEmail, IsPhoneNumber, IsOptional } from 'class-validator';

export class UserDto{  
    @IsString()
    readonly uid: string = "";

    @IsString()
    readonly username: string = "";

    @IsEmail()
    readonly email: string = "";

    @IsString()
    readonly fullname: string ="";

    @IsPhoneNumber("IT")
    @IsOptional()
    readonly phone: string = "";
}