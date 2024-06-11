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
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      img: './assets/img/join.png',
      liveTest: 'link',
      github: 'link'
    }
  ]
}
