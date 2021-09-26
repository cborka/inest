import {Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository, UpdateResult} from 'typeorm';
import { User } from './users.entity';
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
//import {validate} from "class-validator";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {}

    create(createUserDto: CreateUserDto): Promise<User> {
        const user = new User();
        user.name = createUserDto.name;
        user.email = createUserDto.email;
        user.password = createUserDto.password;

        // не до конца разобрался с местной валидацией
        // const errors = validate(user);
        // if (!errors) {
        //     throw new Error(`Validation failed!`);
        // } else {
        // }

        return this.usersRepository.save(user);
    }

    update(updateUserDto: UpdateUserDto): Promise<UpdateResult> {
        const updateResult = this.usersRepository
            .createQueryBuilder()
            .update(User)
            .set({
                name: updateUserDto.name,
                email: updateUserDto.email,
                password: updateUserDto.password
            })
            .where("id = :id", { id: updateUserDto.id })
            .execute();

        return updateResult;
    }

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(id: string): Promise<User> {
        return this.usersRepository.findOne(id);
    }


    findOneName(name: string): Promise<User[]> {
        const user = this.usersRepository
            .createQueryBuilder("user")
            .where("user.name = :name", { name: name })
            .getMany();

        return user;
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.softDelete(id);
    }
}
