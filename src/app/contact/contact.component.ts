import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  checkbox = true;

  http = inject(HttpClient)

  contactData = {
    name: '',
    email: '',
    message: ''
  }

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(NgForm: NgForm) {
    // if (NgForm.submitted && NgForm.form.valid && !this.mailTest) {
    //   this.http.post(this.post.endPoint, this.post.body(this.contactData))
    //     .subscribe({
    //       next: (response) => {

    //         NgForm.resetForm();
    //       },
    //       error: (error) => {
    //         console.error(error);
    //       },
    //       complete: () => console.info('send post complete'),
    //     });
    // } else if (NgForm.submitted && NgForm.form.valid && this.mailTest) {

    //   NgForm.resetForm();
    // }
    console.log('Test');
  }

  toggleCheckboxState() {
    if(this.checkbox) {
      this.checkbox = false;
    } else {
      this.checkbox = true;
    }
  }
}