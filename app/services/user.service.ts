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
        await this.userRepository.create(new User(
            userDto.uuid,
            userDto.username,
            userDto.email,
            userDto.fullname,
            userDto.phone,
            userDto.areas,
        ))
    }

    public async delete(uuid: string): Promise<void> {
        await this.userRepository.getOneByUuid(uuid)
        .then((user) => this.userRepository.delete(user));
    }

    public async getAll(): Promise<User[]>{
        return await this.userRepository.getAll();
    }

    public async getOneByUuid(uuid: string): Promise<User> {
        return await this.userRepository.getOneByUuid(uuid);
    }

    public async getOneByEmail(email: string): Promise<User> {
        return await this.userRepository.getOneByEmail(email);
    }
}
