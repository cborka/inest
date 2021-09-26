import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn} from 'typeorm';
import {IsEmail} from "class-validator";

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 80 })
    name: string;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn ()
    createdAt: string;

    @DeleteDateColumn ()
    deletedAt: string;

    @Column({ default: true })
    isDeleted: boolean;
}

/*
● id и name;
● email и password;
● createdAt и deletedAt.
 */