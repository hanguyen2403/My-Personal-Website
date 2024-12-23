import { Component, HostListener  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen: boolean = false;


  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkWindowWidth();
  }
  // Toggle the menu visibility
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
  checkWindowWidth(): void {
    if (window.innerWidth > 768) {
      this.menuOpen = false;
    }
  }
}
