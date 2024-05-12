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
  home: boolean = true
  projects: boolean = false
  about: boolean = false
  contact: boolean = false
  hero: number | undefined = 0

  @HostListener('window:scroll', ['$event'])

  onScroll() {
    this.hero = document.getElementById("hero")?.offsetHeight
    if (window.scrollY < 1) {
      this.smallMenu = false
    }
    else {
      this.smallMenu = true
    }
    if (this.hero != undefined) {
      if (window.scrollY < this.hero - 100) {
        this.home = true
      }
      else {
        this.home = false
      }
    }
    if (this.hero != undefined) {
      if (window.scrollY > this.hero - 100) {
        this.projects = true
      }
      else {
        this.projects = false
      }
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
