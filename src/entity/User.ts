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

@Entity()
export class User extends BaseEntity {
   @PrimaryGeneratedColumn('uuid')
   id: number

   @Column({ type: 'varchar', length: 256, nullable: false })
   firstname: string

   @Column({ type: 'varchar', length: 256, nullable: false })
   lastname: string

   @Column({ type: 'int', nullable: false })
   age: number

   @Column({ type: 'varchar', length: 256, nullable: false })
   email: string

   @Column({ type: 'varchar', length: 256, nullable: false })
   password: string

   @CreateDateColumn({ type: 'timestamp' })
   createdAt: Date

   @UpdateDateColumn({ type: 'timestamp' })
   updatedAt: Date
}
