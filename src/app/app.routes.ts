import { ContactBaseComponent } from './components/contact/contact-base/contact-base.component';
import { ContactEditComponent } from './components/contact/contact-edit/contact-edit.component';
import { ContactItemComponent } from './components/contact/contact-item/contact-item.component';
import { ContactListComponent } from './components/contact/contact-list/contact-list.component';
import { AboutComponent } from './components/misc/about/about.component';
import { HomeComponent } from './components/misc/home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contacts', component: ContactListComponent },
    { path: 'contacts/:id', component: ContactBaseComponent,
        children: [
            { path: '', component: ContactItemComponent },
            { path: 'edit', component: ContactEditComponent }
        ]
    }
];
