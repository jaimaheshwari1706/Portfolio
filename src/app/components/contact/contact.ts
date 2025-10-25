import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {

  sendMessage(form: NgForm) {
    if (form.valid) {
      console.log('Form Data:', form.value);
      alert('Thank you for reaching out! I will get back to you soon.');
      form.reset();
    }
  }

}
