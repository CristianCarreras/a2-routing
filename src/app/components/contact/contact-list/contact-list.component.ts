import { contacts } from './../../../shared/data/contacts.data';
import { ContactsService } from './../../../shared/services/contacts.service';
import { Contact } from './../../../shared/models/contact.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Array<Contact> = [];

  constructor(
    private router: Router,
    private contactsService: ContactsService
  ) { }

  ngOnInit() {
    this.contactsService.list()
      .subscribe(contacts => this.contacts = contacts);
  }

  showContactDetails(id: number) {
    this.router.navigate(['/contacts', id]);
  }

  editContact(id: number) {
    this.router.navigate(['/contacts', id, 'edit']);
  }
}
