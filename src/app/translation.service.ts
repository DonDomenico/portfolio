import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  [x: string]: any;

  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('de');
  }

  public switchLanguage(language: string): void {
    this.translate.use(language);
  }
}
