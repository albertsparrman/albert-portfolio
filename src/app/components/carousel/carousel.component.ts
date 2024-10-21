/* eslint-disable @typescript-eslint/no-explicit-any */
import {AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import projects from '../../../assets/projects.json'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements AfterViewInit {
  myProjectsJson: { name: string, description: string, image: string, website: string, github: string, figma: string }[] = projects.myProjects

  list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  itemWidth = 320

  mouseDown = false

  startX: any

  scrollLeft: any

  @ViewChild('carousel') carousel: ElementRef | undefined
  @ViewChild('carouselItem') carouselItem: ElementRef | undefined

  ngAfterViewInit(): void {
    console.log(this.carousel?.nativeElement.clientWidth);
    if (this.carousel != undefined) {
      this.carousel.nativeElement.scrollLeft = this.itemWidth * this.list.length 
    }
    console.log(this.carousel?.nativeElement.scrollLeft);
  }

  startDragging(e: { pageX: number; }) {
    this.mouseDown = true;
    this.startX = e.pageX - this.carousel?.nativeElement.offsetLeft;
    this.scrollLeft = this.carousel?.nativeElement.scrollLeft;
  }
  stopDragging() {
    if (this.carousel != undefined) {
      if (this.carousel.nativeElement.scrollLeft < this.itemWidth * this.list.length) {
        this.carousel.nativeElement.scrollLeft += this.itemWidth * this.list.length
      }
      if (this.carousel.nativeElement.scrollLeft > this.itemWidth * this.list.length * 2) {
        this.carousel.nativeElement.scrollLeft -= this.itemWidth * this.list.length
      }
    }
    this.mouseDown = false;
  }
  moveEvent(e: { preventDefault: () => void; pageX: number; }) {
    e.preventDefault();
    if (!this.mouseDown) {
      return;
    }
    if (this.carousel != undefined) {
      const x = e.pageX - this.carousel.nativeElement.offsetLeft;
      const scroll = x - this.startX;
      this.carousel.nativeElement.scrollLeft = this.scrollLeft - scroll;
    }
  }


  /* scrolling() {
    console.log(this.carousel?.nativeElement.scrollLeft)
    if (this.carousel?.nativeElement.scrollLeft < 1) {
      if (this.carousel !== undefined) {
        this.carousel.nativeElement.scrollLeft = this.itemWidth
      }
    }
  } */
  
}
