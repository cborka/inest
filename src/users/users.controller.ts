import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { UsersService } from './users.service';
import {User} from "./users.entity";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {UpdateResult} from "typeorm";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
//    create(@Body() createUserDto: CreateUserDto): CreateUserDto {
        return this.usersService.create(createUserDto);
     //   return this.usersService.create({firstName:"Iosifff",lastName:"Stalinnn"});
//        return {firstName:"Iosif",lastName:"Stalin"}
     //   return createUserDto;

    }

    @Post('/u')
    update(@Body() updateUserDto: UpdateUserDto): Promise<UpdateResult> {
        return this.usersService.update(updateUserDto);
    }
//    update(@Body() updateUserDto: UpdateUserDto): string {
//        return 'dsjlahfjs;lasdf;lajlja;';
//        return updateUserDto.name;
//}

//    @Delete(':id')
    @Get('/d/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.usersService.remove(id);
    }

    @Get('/all')
    getUsers(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get('/one/:name')
    getUser(name: string): Promise<User> {
        return this.usersService.findOne(name);
    }

    @Get('/n/:name')
    findOneName(@Param('name') name: string): Promise<User[]> {
        return this.usersService.findOneName(name);
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<User> {
        return this.usersService.findOne(id);
    }


}
