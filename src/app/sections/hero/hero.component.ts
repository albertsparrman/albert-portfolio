import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  currentArticle: number = 1

  heroArticle1: boolean = true
  heroArticle2: boolean = false
  heroArticle3: boolean = false

  resetHeroBooleans() {
    this.heroArticle1 = false
    this.heroArticle2 = false
    this.heroArticle3 = false
  }

  setHeroBooleansValue() {
    this.resetHeroBooleans()

    if(this.currentArticle == 1){
      this.heroArticle1 = true
    }
    else if (this.currentArticle == 2) {
      this.heroArticle2 = true
    }
    else if (this.currentArticle == 3) {
      this.heroArticle3 = true
    }
  }

  heroScrollLeft() {
    if (this.currentArticle > 1) {
      this.currentArticle -= 1
    }
    else {
      this.currentArticle = 3
    }

    this.setHeroBooleansValue()
  }

  heroScrollRight() {


    if (this.currentArticle < 3) {
      this.currentArticle += 1
    }
    else {
      this.currentArticle = 1
    }
    
    this.setHeroBooleansValue()
  }

  heroScrollTo(scrollTo: number){
    this.currentArticle = scrollTo
    this.setHeroBooleansValue()
  }
}
