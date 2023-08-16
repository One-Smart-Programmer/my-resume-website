import { Component, Input } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.scss']
})
export class CardSectionComponent {
  @Input()
  public title: String = '';

  @Input()
  public cardId: string = '';

  @Input()
  public reverseArrowAction?: () => void;

  @Input()
  public forwardArrowAction?: () => void;

  @Input()
  public list: string = '';
  
  @Input()
  public onMobileScreen?: boolean;

  constructor(private readonly appService: AppService) {
  }

  public navigateToSection(section : string) {
    this.appService.navigate('#' + section);
  }
}
