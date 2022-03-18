import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm'
import { Movie } from './Movie'
import { Field, Int, ObjectType } from 'type-graphql'

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column({ type: 'varchar', length: 256, nullable: false })
    firstname: string

    @Field()
    @Column({ type: 'varchar', length: 256, nullable: false })
    lastname: string

    @Field()
    @Column({ type: 'varchar', length: 256, nullable: false })
    email: string

    @Field()
    @Column({ type: 'varchar', length: 256, nullable: false })
    password: string

    @Column('int', { default: 0 })
    confirmed: number

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date
}
