import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  scrollToElement($element: string): void {
    document.getElementById($element)?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
  }
}
