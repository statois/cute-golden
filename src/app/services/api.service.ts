import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Checkout } from '../models/api/checkout';
import { Contact } from '../models/api/contact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private rootUrl = environment.API_URL;

  getheadersNoAuth() {
    let headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Token' : '',
      'No-Auth': 'True'
    };
    return headerDict;
  }

  getheadersWithAuth() {
    let headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    };
    return headerDict;
  }

  constructor(private http: HttpClient) { }

  checkout(checkout: Checkout) {
    let reqHeaders = { headers: new HttpHeaders(this.getheadersNoAuth()) };
    let body = JSON.stringify(checkout);
    return this.http.post(this.rootUrl + '/checkout', body, reqHeaders);
  }

  contact(contact: Contact) {
    let reqHeaders = { headers: new HttpHeaders(this.getheadersNoAuth()) };
    let body = JSON.stringify(contact);
    return this.http.post(this.rootUrl + '/contact', body, reqHeaders);
  }
}