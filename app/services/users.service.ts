import { User } from "../entity/user.entity";
import { getManager } from "typeorm";


export class UsersService {
    async create( uid: string, username: string, email: string, fullname: string, phone: string ){

        console.log("Inserting a new user into the database...");
        const user = new User(uid, username, email, fullname, phone);
        let insert = getManager().getRepository(User).insert(user);
    }
    
    async getAllUsers() {
        let result = await getManager().getRepository(User).find()
        return result
    }

    async getOneByUsername(username: string) {

        let result = await getManager().getRepository(User).findOne({
            username: username
        })
        
        return result
    }

    async countByUid(uid: string): Promise<number>{

        let result = getManager().getRepository(User).count({
            uid: uid
        })
        return await result;
    }

    async delete(username: string) {

        let deleted = getManager().getRepository(User).delete({
            username: username
        })
    }    
}