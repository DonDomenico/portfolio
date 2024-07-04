import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';
import { HeaderComponent } from '../header/header.component';


interface project {
  title: string;
  tools: string[];
  
  img: string;
  liveTest: string;
  github: string;
}

@Component({
  selector: 'app-myportfolio',
  standalone: true,
  imports: [TranslateModule, HeaderComponent],
  templateUrl: './myportfolio.component.html',
  styleUrl: './myportfolio.component.scss'
})
export class MyportfolioComponent {
  translate = inject(TranslationService);
  header = inject(HeaderComponent);

  projects: project[] = [
    {
      title: 'Join',
      tools: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      
      img: './assets/img/join-new.png',
      liveTest: 'https://join.dominik-grunow.de',
      github: 'https://github.com/DonDomenico/join'
    },
    {
      title: 'El Pollo Loco',
      tools: ['JavaScript', 'HTML', 'CSS'],
      
      img: './assets/img/pollo-loco-new.png',
      liveTest: 'https://el-pollo-loco.dominik-grunow.de',
      github: 'https://github.com/DonDomenico/pollo-loco'
    },
    {
      title: 'Pokédex',
      tools: ['JavaScript', 'HTML', 'CSS', 'API'],
      
      img: './assets/img/pokedex-new.png',
      liveTest: 'https://pokedex.dominik-grunow.de',
      github: 'https://github.com/DonDomenico/pokedex'
    }
  ]
}
