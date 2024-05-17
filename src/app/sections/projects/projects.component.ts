import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import projects  from '../../../assets/projects.json'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectsJson: {name: string, description: string, image: string, website: string, github: string, figma: string}[] = projects
  loadedProjects: number = 3


  
  scrollToElement($element: string): void {
    document.getElementById($element)?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
  }
}
