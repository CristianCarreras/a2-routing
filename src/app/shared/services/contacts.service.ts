import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ContactsService {
  private static readonly BASE_API: string = environment.apiBase;
  private static readonly USERS_API: string = `${ContactsService.BASE_API}/users`;
  private static defaultHeaders = new Headers({ 'Content-Type': 'application/json' });
  private static defaultOptions = new RequestOptions({ headers: ContactsService.defaultHeaders });


  constructor(private http: Http) {}

  list(): Observable<Array<Contact>> {
    return this.http.get(ContactsService.USERS_API, ContactsService.defaultOptions)
      .map((res: Response) => res.json())
      .catch((error: Response) => this.handleError(error));
  }

  get(id: number): Observable<Contact> {
    return this.http.get(`${ContactsService.USERS_API}/${id}`, ContactsService.defaultOptions)
      .map((res: Response) => res.json())
      .catch((error: Response) => this.handleError(error));
  }

  edit(contact: Contact): Observable<Contact> {
    return this.http.put(`${ContactsService.USERS_API}/${contact.id}`, JSON.stringify(contact), ContactsService.defaultOptions)
      .map((res: Response) => res.json())
      .catch((error: Response) => this.handleError(error));
  }

  private handleError(error: Response): Observable<any> {
    if (!environment.production) {
      console.error(error);
    }
    return Observable.throw(error.json());
  }
}
