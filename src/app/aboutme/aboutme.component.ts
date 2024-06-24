import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {
  translate = inject(TranslationService);
}
