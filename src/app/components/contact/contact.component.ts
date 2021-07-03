import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/api/contact';
import { ApiService } from '../../services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact: Contact = new Contact();
  isLoading = false;
  buttonMsg = "Send Message";
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  submit() {
    this.buttonMsg = "Loading..."
    this.apiService.contact(this.contact)
    .subscribe((data: any) => {
      this.isLoading = true;
      Swal({
        title: '👍Thanks!',
        text: 'Thank you! Your message has been received. We will contact you as soon as possible',
        type: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#c37c5d'
      })
      this.contact = new Contact();
      this.isLoading = false;
      this.buttonMsg = "Send Message";
    },
      (err: HttpErrorResponse) => {
        this.isLoading = false;
        Swal({
          title: 'Error!',
          text: 'Unable to send message. Make sure you are connected to the internet',
          type: 'warning',
          confirmButtonText: 'Ok got it!',
          confirmButtonColor: '#c37c5d'
        })
        this.buttonMsg = "Send Message";
      });

  }
}
