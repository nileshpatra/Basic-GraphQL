import { Resolver, Mutation, Arg } from "type-graphql";
import { User } from "../entity/user";

@Resolver()
export class RegisterResolver{
    @Mutation(() => User)
    async register(
        @Arg('email') email: string,
        @Arg('password') password: string,
    ):Promise<User>{
        const user = await User.create({
            email,
            password
        }).save()
        return user;
    }    
}