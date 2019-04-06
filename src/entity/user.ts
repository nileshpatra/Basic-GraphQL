import { Resolver, Field, ObjectType } from "type-graphql";
import { BaseEntity, PrimaryGeneratedColumn, Entity, Column } from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    @Field()
    id! : number;

    @Column()
    @Field()
    email! : string;

    @Column()
    password! : string;

}