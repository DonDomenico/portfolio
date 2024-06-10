import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  icons: {source: string, text: string}[] = [
    {source: './assets/img/angular-logo.png', text: 'Angular'},
    {source: './assets/img/ts-logo.png', text: 'TypeScript'},
    {source: './assets/img/js-logo.png', text: 'JavaScript'},
    {source: './assets/img/html-logo.png', text: 'HTML'},
    {source: './assets/img/firebase-logo.png', text: 'Firebase'},
    {source: './assets/img/git-logo.png', text: 'GIT'},
    {source: './assets/img/css-logo.png', text: 'CSS'},
    {source: './assets/img/api-logo.png', text: 'Rest-Api'},
    {source: './assets/img/scrum-logo.png', text: 'Scrum'},
  ]
    
  
}
