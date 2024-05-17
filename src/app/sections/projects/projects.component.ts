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
  projectsJson: {name: string, description: string}[] = projects

  test() {
    console.log(this.projectsJson[0].name)
  }
  
  scrollToElement($element: string): void {
    document.getElementById($element)?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
  }
}
