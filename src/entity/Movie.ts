import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
    BaseEntity,
    ManyToOne,
    JoinColumn,
} from 'typeorm'
import { Category } from './Category'
import { Field, Int, ObjectType } from 'type-graphql'

@ObjectType()
@Entity()
export class Movie extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column()
    title: string

    @Field(() => Int)
    @Column('int', { default: 60 })
    minutes: number

    @Field((type) => Int, { nullable: true })
    @Column('int', { nullable: true })
    categoryId!: number

    @Field((_type) => Category, { nullable: true })
    @ManyToOne((_type) => Category, (category) => category.movie, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'categoryId' })
    category!: Category

    @Field()
    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @Field()
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date
}
