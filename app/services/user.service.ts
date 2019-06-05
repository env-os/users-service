import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../entities/user.entity';
import { UserDto } from '../dto/user.dto';

@Service()
export class UserService {
    constructor(
        @InjectRepository()
        private readonly userRepository: UserRepository,
    ) {}

    public async create(userDto: UserDto): Promise<void> {
        var usernameTest = null;
        if (!/\s/.test(userDto.username)) {
            usernameTest = userDto.username
        }
        await this.userRepository.create(new User(
            usernameTest,
            userDto.fullname,
            userDto.email,
            userDto.phone
        )).catch(function(error) {
            throw("Error: whitespace in the username");
        });
    }

    public async delete(username: string): Promise<void> {
        await this.userRepository.getOneByUsername(username)
        .then((user) => {
            if(user != null){
                this.userRepository.delete(user);
            }
        })
    }

    public async getAll(): Promise<User[] | undefined>{
        return await this.userRepository.getAll();
    }

    public async getOneByUsername(username: string): Promise<User | undefined>{
        return await this.userRepository.getOneByUsername(username);
    }

    public async userExist(username: string): Promise<boolean | undefined> {
        const user = await this.userRepository.getOneByUsername(username);
        return user != null ? true: false;
    }
}
