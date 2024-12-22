import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isSendMsg: boolean = false;
    
  sendMessage(event: Event) {
    event.preventDefault(); // Prevent form submission
    this.isSendMsg = true;
    setTimeout(() => {
      this.isSendMsg = false;
    }, 3000); // Reset state after 4 seconds
  }
}
