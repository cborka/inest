import {Body, Controller, Delete, Get, Param, Post, Put, Redirect} from '@nestjs/common';
import { UsersService } from './users.service';
import {User} from "./users.entity";
import {UpdateUserDto} from "./dto/update-user.dto";
import {UpdateResult} from "typeorm";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    // Запрос на создание или обновление записи
    @Post('')
    @Redirect('/')
    create_update(@Body() updateUserDto: UpdateUserDto): Promise<UpdateResult> | Promise<User> {
        return this.usersService.create_update(updateUserDto);
    }

    // Запрос на мягкое удаление записи
//    @Delete('/delete/:id')
    @Get('/delete/:id')
    @Redirect('/')
    remove(@Param('id') id: string): Promise<void> {
        return this.usersService.remove(id);
    }

    // Запрос на восстановление мягко удаленной записи
    @Get('/undelete/:id')
    @Redirect('/')
    undelete(@Param('id') id: string): Promise<void> {
        return this.usersService.undelete(id);
    }

    // Запрос на получение всех записей
    @Get('/all')
    getUsers(): Promise<User[]> {
        return this.usersService.findAll();
    }

    // Запрос на получение мягко удалённых записей
    @Get('/deleted')
    findSoftDeleted(): Promise<User[]> {
        return this.usersService.findSoftDeleted();
    }

    // Запрос на получение записи по имени
    @Get('/name/:name')
    findByName(@Param('name') name: string): Promise<User[]> {
        return this.usersService.findByName(name);
    }

    // Запрос на получение записи по id
    // Получаю по одной записи именно в массиве чтобы упросить фронтенд
    @Get('/id/:id')
    findById(@Param('id') id: string): Promise<User[]> {
        return this.usersService.findById(id);
    }

    // Запрос на получение ОДНОЙ записи по id
    @Get('/1/:id')
    findOne(@Param('id') id: string): Promise<User> {
        return this.usersService.findOne(id);
    }

}
