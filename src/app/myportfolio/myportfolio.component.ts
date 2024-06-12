import { Component } from '@angular/core';

interface project {
  title: string;
  tools: string[];
  description: string;
  img: string;
  liveTest: string;
  github: string;
}

@Component({
  selector: 'app-myportfolio',
  standalone: true,
  imports: [],
  templateUrl: './myportfolio.component.html',
  styleUrl: './myportfolio.component.scss'
})
export class MyportfolioComponent {
  projects: project[] = [
    {
      title: 'Join',
      tools: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      description: 'Task manager inspired by the Kanban System. Create and organize\ntasks using drag and drop functions, assign users and categories.',
      img: './assets/img/join.png',
      liveTest: 'https://dominik-grunow.developerakademie.net/join/',
      github: 'https://github.com/DonDomenico/join'
    },
    {
      title: 'El Pollo Loco',
      tools: ['JavaScript', 'HTML', 'CSS'],
      description: 'Jump, run and throw game based on object-oriented approach.\nHelp the character Pepe to find coins and tabasco salsa to fight againt the crazy hen.',
      img: './assets/img/pollo-loco.png',
      liveTest: 'https://dominik-grunow.developerakademie.net/pollo_loco/',
      github: 'https://github.com/DonDomenico/pollo-loco'
    },
    {
      title: 'Pokédex',
      tools: ['JavaScript', 'HTML', 'CSS', 'Api'],
      description: 'A simple library that provides and catalogues pokémon\ninformation based on the PokéAPI.',
      img: './assets/img/pokedex.png',
      liveTest: 'https://dominik-grunow.developerakademie.net/pokedex/index.html',
      github: 'https://github.com/DonDomenico/pokedex'
    }
  ]
}
