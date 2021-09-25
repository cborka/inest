import {Body, Controller, Get, Post} from '@nestjs/common';
import { UsersService } from './users.service';
import {User} from "./users.entity";
import {CreateUserDto} from "./dto/create-user.dto";

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


    @Get('/all')
    getUsers(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get('/one')
    getUser(id: string): Promise<User> {
        return this.usersService.findOne(id);
    }



}
