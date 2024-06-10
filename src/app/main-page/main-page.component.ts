import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AtfComponent } from '../atf/atf.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderComponent, AtfComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
