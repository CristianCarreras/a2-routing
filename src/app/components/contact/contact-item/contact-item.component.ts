import { ContactsService } from './../../../shared/services/contacts.service';
import { Contact } from './../../../shared/models/contact.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  contact: Contact;

  constructor(
    private routes: ActivatedRoute,
    private contactsService: ContactsService) { }

  ngOnInit() {
    this.routes.params.subscribe(params => {
      console.log(params);
      this.contact = this.contactsService.get(Number(params['id']));
    });
  }

}
