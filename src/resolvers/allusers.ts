import { Resolver, Query } from "type-graphql";
import { User } from "../entity/user";
@Resolver()
export class AllUsersResolver{
    @Query(() => [User])
    async allusers() : Promise <Array<User> | null>{
        const users = User.find();
        return users;
    }
}