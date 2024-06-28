import { Component } from '@angular/core';
import { MainPageComponent } from '../main-page/main-page.component';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { SkillsComponent } from '../skills/skills.component';
import { MyportfolioComponent } from '../myportfolio/myportfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [MainPageComponent, AboutmeComponent, SkillsComponent, MyportfolioComponent, ContactComponent, FooterComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
