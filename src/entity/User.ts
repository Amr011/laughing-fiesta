import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export class User extends BaseEntity {
   @PrimaryGeneratedColumn()
   id: number

   @Column()
   firstname: string

   @Column()
   lastname: string

   @Column()
   age: number

   @Column()
   email: string

   @Column()
   password: string
}
