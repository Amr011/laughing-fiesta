import {
   Entity,
   PrimaryGeneratedColumn,
   CreateDateColumn,
   UpdateDateColumn,
   Column,
   BaseEntity,
   OneToMany,
   ManyToOne,
} from 'typeorm'
import { Movie } from './Movie'
import { Field, Int, ObjectType } from 'type-graphql'

@ObjectType()
@Entity()
export class Category extends BaseEntity {
   @Field(() => Int)
   @PrimaryGeneratedColumn()
   id: number

   @Field()
   @Column()
   title: string

   @Field(() => [Movie], { nullable: true })
   @OneToMany(() => Movie, (movie) => movie.category)
   movie: Movie[]

   @Field()
   @CreateDateColumn({ type: 'timestamp' })
   createdAt: Date

   @Field()
   @UpdateDateColumn({ type: 'timestamp' })
   updatedAt: Date
}
