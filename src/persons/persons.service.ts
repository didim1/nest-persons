import { Injectable } from '@nestjs/common';
import { PersonType, ResponseMsg } from './interfaces/person.interface';

@Injectable()
export class PersonsService {
  private readonly persons: PersonType[] = [];

  async createPerson(person: PersonType): Promise<ResponseMsg> {
    this.persons.push(person);
    return {
      success: true,
      msg: 'Person created successfully',
    };
  }

  async findAllPersons(): Promise<PersonType[]> {
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
