import { contacts } from './../data/contacts.data';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable()
export class ContactsService {
  contacts: Array<Contact> = contacts;

  constructor() {}

  list(): Array<Contact> {
    return this.contacts;
  }

  get(id: number): Contact {
    return this.contacts.find(contact => contact.id === id);
  }

}
