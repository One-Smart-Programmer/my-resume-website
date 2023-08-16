import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Section } from 'src/model/Sections';
import { AppService } from '../app.service';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-scrollable-card-sections',
  templateUrl: './scrollable-card-sections.component.html',
  styleUrls: ['./scrollable-card-sections.component.scss']
})
export class ScrollableCardSectionsComponent implements OnInit, AfterViewInit { 
  public sections: Section[] = [];

  @Input()
  public orientation: 'horizontal' | 'vertical' = 'vertical';

  @ViewChild(CdkVirtualScrollViewport) public virtualScrollViewport? : CdkVirtualScrollViewport;

  public scrollToNextSection?: (viewIndex: number) => () => void = undefined;

  public scrollToPreviousSection?: (viewIndex: number) => () => void = undefined;

  @Input()
  public onMobileScreen?: boolean;

  constructor(private readonly appService: AppService) {
  }

  ngOnInit(): void {
    this.sections = this.appService.readApplicationData();
  }

  ngAfterViewInit(): void {
    this.scrollToNextSection = (viewIndex: number) => () => this.virtualScrollViewport?.scrollTo({ left: window.innerWidth * viewIndex, behavior: 'smooth'});
  
    
    this.scrollToPreviousSection = (viewIndex: number) => () => this.virtualScrollViewport?.scrollTo({left: window.innerWidth * viewIndex - window.innerWidth, behavior: 'smooth' });
  }

  public scrollToFirstSection = (): void => {
    this.virtualScrollViewport?.scrollTo({ left: window.innerWidth, behavior: 'smooth'});
  }

  public generateCardIdValueFromTitle(title: string): string {
    return this.appService.generateCardIdValuefromTitle(title);
  }
}
