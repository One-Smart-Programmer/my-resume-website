import { Component, Input } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  public buttonAction?: () => void;

  @Input()
  public onMobileScreen?: boolean;

  constructor(private readonly appService: AppService) {}

  public navigateToSection(section : string) {
    this.appService.navigate('#' + section);
  }
}
