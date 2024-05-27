import { AfterViewInit, Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import projects from '../../../assets/projects.json'
import { isPlatformBrowser } from "@angular/common"

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  myProjectsJson: { name: string, description: string, image: string, website: string, github: string, figma: string }[] = projects.myProjects
  groupProjectsJson: { name: string, description: string, image: string, website: string, github: string, figma: string }[] = projects.groupProjects

  date: Date = new Date()
  seconds: number = 0
  minutes: number = 0
  
  currentFeaturedProject: number = 0

  isBrowser = signal(false);  // a signal to store if platform is browser

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser.set(isPlatformBrowser(platformId));  // save isPlatformBrowser in signal
  }


  ngAfterViewInit(): void {
    if (this.isBrowser()) { // check it where you want to write setTimeout or setInterval
      setInterval(() => {
        this.timer()
      }, 1000)
    }
  }

  timer() {
    this.date = new Date()
    this.seconds = 59 - this.date.getSeconds()
    
    if (this.date.getMinutes() <= 15) {
      this.minutes = 15 - this.date.getMinutes()
    }
    else if (this.date.getMinutes() > 15 && this.date.getMinutes() <= 30) {
      this.minutes = 30 - this.date.getMinutes()
    }
    else if (this.date.getMinutes() > 30 && this.date.getMinutes() <= 45) {
      this.minutes = 45 - this.date.getMinutes()
    }
    else if (this.date.getMinutes() > 45 && this.date.getMinutes() <= 60) {
      this.minutes = 60 - this.date.getMinutes()
    }

    
    if (this.minutes <= 0 && this.seconds <= 0) {
      this.currentFeaturedProject += 1
    }
}

  scrollToElement($element: string): void {
    document.getElementById($element)?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
  }
}
