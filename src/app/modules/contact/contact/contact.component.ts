import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  isSendMsg: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  sendMessage(event: Event): void {
    this.isSendMsg = true;
    event.preventDefault();

    if (this.contactForm.valid) {
      emailjs
        .send(
          'service_8e03vd3', // Replace with your EmailJS service ID
          'template_8k8pizq', // Replace with your EmailJS template ID
          {
            from_name: this.contactForm.value.name,
            reply_to: this.contactForm.value.email,
            subject: this.contactForm.value.subject,
            message: this.contactForm.value.message,
          },
          'eramHKTjS6t49ArHp' // Replace with your EmailJS public key
        )
        .then(
          (response) => {
            console.log('Email sent successfully:', response.status, response.text);
            this.contactForm.reset();
            this.isSendMsg = false;
          },
          (error) => {
            console.error('Failed to send email:', error);
          }
        );
    } else {
      console.error('Form is invalid');
    }
  }
}
