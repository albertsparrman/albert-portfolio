import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  backgroundHeight: string = '70%'
  backgroundPosition: string = '0px'

  @HostListener("window:scroll", []) onWindowScroll() {
    this.backgroundHeight = 70 + window.scrollY / 9 + '%'
    this.backgroundPosition = 0 - window.scrollY + 'px'
  }
}
