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

@Entity()
export class Category extends BaseEntity {
   @PrimaryGeneratedColumn()
   id: number

   @Column()
   title: string

   @OneToMany(() => Movie, (movie) => movie.category)
   movie!: Movie[]

   @CreateDateColumn({ type: 'timestamp' })
   createdAt: Date

   @UpdateDateColumn({ type: 'timestamp' })
   updatedAt: Date
}
