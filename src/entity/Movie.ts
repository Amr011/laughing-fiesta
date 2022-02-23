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

@Entity()
export class Movie extends BaseEntity {
   @PrimaryGeneratedColumn()
   id: number

   @Column()
   title: string

   @Column('int', { default: 60 })
   minutes: number

   @ManyToOne(() => Category, (category) => category.movie)
   @JoinColumn({ name: 'categoryId' })
   category!: Category

   @CreateDateColumn({ type: 'timestamp' })
   createdAt: Date

   @UpdateDateColumn({ type: 'timestamp' })
   updatedAt: Date
}
