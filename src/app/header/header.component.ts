import { Component, inject } from '@angular/core';
import { TranslationService } from '../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  translate = inject(TranslationService);
  languageGerman = true;
  languageEnglish = false;
  navOpen: boolean = false;

  setLanguageGerman() {
    this.languageGerman = true;
    this.languageEnglish = false;
  }

  setLanguageEnglish() {
    this.languageEnglish = true;
    this.languageGerman = false;
  }

  toggleNav() {
    if(this.navOpen == false) {
      this.navOpen = true;
    } else {
      this.navOpen = false;
    }
  }

  closeNav() {
    this.navOpen = false;
  }
}

