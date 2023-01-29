import { Injectable } from '@nestjs/common';
import { PersonType, ResponseMsg } from './interfaces/person.interface';
import { CreatePersonDto } from './dto/create-person.dto';

@Injectable()
export class PersonsService {
  private readonly persons: CreatePersonDto[] = [];

  async createPerson(person: CreatePersonDto): Promise<ResponseMsg> {
    const { name, age } = person;
    this.persons.push({
      name,
      age,
    });
    return {
      success: true,
      msg: 'Person created successfully',
    };
  }

  async findAllPersons(): Promise<CreatePersonDto[]> {
    return this.persons;
  }

  async deletePerson(id: number): Promise<ResponseMsg> {
    //find index of person
    const personIndex = this.persons.findIndex((person) => person.id === id);
    this.persons.splice(personIndex, 1);
    return {
      success: true,
      msg: 'Person deleted successfully',
    };
  }
}
