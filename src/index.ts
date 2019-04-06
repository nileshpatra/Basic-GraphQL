import Express from "express"
import {ApolloServer} from "apollo-server-express"
import { createConnection } from "typeorm";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { RegisterResolver } from "./resolvers/register";
import { AllUsersResolver } from "./resolvers/allusers";

const app = Express();

async function main(){
const schema = await buildSchema({
    resolvers: [HelloResolver, RegisterResolver, AllUsersResolver]
});
createConnection().then(() => console.log('connection set')).catch(console.error);
app.get('/' , (req , res) => {
    res.send("hello");
});

const apolloServer = new ApolloServer({
    schema
})

apolloServer.applyMiddleware({
    app
})

app.listen(3000 , () => {
    console.log('runnning on 3000');
});
}
main()