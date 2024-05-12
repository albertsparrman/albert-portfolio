import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  smallMenu: boolean = false
  home: boolean = false
  projects: boolean = false
  about: boolean = false
  contact: boolean = false

  @HostListener('window:scroll', ['$event'])

  onScroll() {
    if (window.scrollY < 1) {
      this.smallMenu = false
    }
    else {
      this.smallMenu = true
    }

    if(window.scrollY > 1 && window.screenY < 200 ) {
      this.home = true
    }
  }

  scrollToElement($element: string): void {
    document.getElementById($element)?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    this.onScroll()
  }

  test() {
    this.home = !this.home
  }
}
