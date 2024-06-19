import { CommonModule, NgStyle, NgTemplateOutlet } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  colorDisabled = '#B6B6B6';
  colorEnabled = '#00BEE8';
  cursorEnabled = 'pointer';
  cursorDisabled = 'not-allowed';

  checkbox = false;
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
    console.log(this.contactData);
    // user feedback hinzufügen, dass Nachricht versendet wurde
    NgForm.resetForm();
  }

  toggleCheckboxState() {
    if(!this.checkbox) {
      this.checkbox = true;
    } else {
      this.checkbox = false;
    }
  }

  enableSubmitButton(email: NgModel, name: NgModel, message: NgModel) {
    if(this.checkbox && email.valid && name.valid && message.valid) {
      return false;
    } else {
      return true;
    }
  }
}