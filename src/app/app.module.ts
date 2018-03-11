import { ContactsService } from './shared/services/contacts.service';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import './rxjs.operators';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/misc/home/home.component';
import { AboutComponent } from './components/misc/about/about.component';
import { NavComponent } from './components/misc/nav/nav.component';
import { routes } from './app.routes';
import { ContactListComponent } from './components/contact/contact-list/contact-list.component';
import { ContactItemComponent } from './components/contact/contact-item/contact-item.component';
import { ContactEditComponent } from './components/contact/contact-edit/contact-edit.component';
import { ContactBaseComponent } from './components/contact/contact-base/contact-base.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    ContactListComponent,
    ContactItemComponent,
    ContactEditComponent,
    ContactBaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
