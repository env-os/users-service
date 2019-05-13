import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../entities/user.entity';
import { Tree } from 'typeorm';

@Service()
export class UserService {
    constructor(
        @InjectRepository()
        private readonly usersRepository: UserRepository,
    ) {}

    public async createUser(uid: string, username: string, email: string, fullname: string, phone: string ) {
        await this.usersRepository.save(new User(
            uid,
            username,
            email,
            fullname,
            phone
        ))
    }

    public async getAllUsers(): Promise<User[]>{
        return await this.usersRepository.find();
    }

    public async getUserByUsername(username: string): Promise<User>{
        return await this.usersRepository.getOneByUsername(username);
    }

    public async userExist(username: string): Promise<boolean> {
        const user = await this.usersRepository.getOneByUsername(username);
        return user != null ? true: false;
    }

    public async deleteUser(username: string) {
        return await this.usersRepository.delete({ username })
    }
}