import {Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository, UpdateResult} from 'typeorm';
import { User } from './users.entity';
import {UpdateUserDto} from "./dto/update-user.dto";
//import {validate} from "class-validator";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {}

    // Создание новой записи
    create(createUserDto: UpdateUserDto): Promise<User> {
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

    // Обновление записи
    update(updateUserDto: UpdateUserDto): Promise<UpdateResult> {
        return this.usersRepository
            .createQueryBuilder()
            .update(User)
            .set({
                name: updateUserDto.name,
                email: updateUserDto.email,
                password: updateUserDto.password
            })
            .where("id = :id", { id: updateUserDto.id })
            .execute();
    }

    // Обновить или создать запись
    create_update(updateUserDto: UpdateUserDto): Promise<UpdateResult> | Promise<User> {
        if (updateUserDto.id == 0) {
            return this.create(updateUserDto);
        } else {
            return this.update(updateUserDto);
        }
    }

    // Получить все записи (кроме удалённых однако)
    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    // Получить одну запись по id
    findOne(id: string): Promise<User> {
        return this.usersRepository.findOne(id);
    }

    // Получить записи по имени
    findByName(name: string): Promise<User[]> {
        return this.usersRepository
            .createQueryBuilder("user")
            .where("user.name = :name", { name: name })
            .getMany();
    }

    // Получить записи по id
    findById(id: string): Promise<User[]> {
        return this.usersRepository
            .createQueryBuilder("user")
            .where("user.id = :id", { id: id })
            .withDeleted()
            .getMany();
    }

    // Получить мягко удаленные зиписи
    findSoftDeleted(): Promise<User[]> {
        return this.usersRepository
            .createQueryBuilder("user")
            .where("user.deletedAt IS NOT NULL")
            .withDeleted()
            .getMany();
    }

    // Мягко удалить запись
    async remove(id: string): Promise<void> {
        await this.usersRepository.softDelete(id);
    }

    // Восстановить мягко удалённую запись
    async undelete(id: string): Promise<void> {
        await this.usersRepository.restore(id);
    }
}
