import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AtfComponent } from './atf/atf.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyportfolioComponent } from './myportfolio/myportfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SkillsComponent } from './skills/skills.component';
import { MainContentComponent } from './main-content/main-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AtfComponent, AboutmeComponent, MyportfolioComponent, ContactComponent, FooterComponent, MainPageComponent, SkillsComponent, MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  onActivate() {
    window.scroll(0, 0)
  }
}
