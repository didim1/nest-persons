import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { PersonsService } from './persons.service';
import { PersonType, ResponseMsg } from './interfaces/person.interface';
import { CreatePersonDto } from './dto/create-person.dto';

@Controller('persons')
export class PersonsController {
  constructor(private readonly personService: PersonsService) {}

  @Get()
  @HttpCode(200)
  async findAllPersons(): Promise<PersonType[]> {
    return this.personService.findAllPersons();
  }

  @Post()
  @HttpCode(201)
  async createPerson(@Body() person: CreatePersonDto): Promise<ResponseMsg> {
    return this.personService.createPerson(person);
  }

  @Delete(':id')
  @HttpCode(200)
  async deletePerson(@Param('id') id: string): Promise<ResponseMsg> {
    return this.personService.deletePerson(+id);
  }
}
