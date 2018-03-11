import { contacts } from './../../../shared/data/contacts.data';
import { ContactsService } from './../../../shared/services/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from './../../../shared/models/contact.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  contact: Contact =  new Contact();

  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    private contactsService: ContactsService
  ) {}

  ngOnInit() {
    this.routes
      .parent
      .params
      .subscribe(params => {
        // const contact = { ...this.contactsService.get(Number(params['id']))}
        this.contactsService.get(Number(params['id']))
          .subscribe(contact => {
            this.contact = contact;
          });
      });
  }

  onSubmitEditForm(form: NgForm) {
    this.contactsService.edit(this.contact)
      .subscribe(contact => {
        this.contact = contact;
        this.router.navigate(['/contacts']);
      });
  }
}
