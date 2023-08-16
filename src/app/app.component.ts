import { Component, OnDestroy, ViewChild } from '@angular/core';
import { AppService } from './app.service';
import { ScrollableCardSectionsComponent } from './scrollable-card-sections/scrollable-card-sections.component';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  @ViewChild("scrollableSections")
  private scrollableSectionsReference?: ScrollableCardSectionsComponent;

  public sideNavOpen = false;

  public onMobileScreen?: boolean;

  private screenResizeObservableSubscription: Subscription;

  constructor(private readonly appService: AppService) {
    this.mobileScreenSizeCheck(window.innerWidth);

    this.screenResizeObservableSubscription = this.appService.screenResizeObservable().subscribe((newSize) => {
      this.mobileScreenSizeCheck(newSize.innerWidth);
    });
  }
  
  ngOnDestroy(): void {
    this.screenResizeObservableSubscription.unsubscribe();
  }

  public sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }

  public navigateToSection(event: MouseEvent, viewIndex: number, viewId: string) {

    if (!this.onMobileScreen) {
      this.scrollableSectionsReference?.scrollToNextSection?.(viewIndex)();
    } else {
      this.sideNavOpen = false;
      this.appService.navigate("#" + this.appService.generateCardIdValuefromTitle(viewId));
    }
  }

  private mobileScreenSizeCheck(width: number) {
    if (width < 720) {
      this.onMobileScreen = true;
    } else {
      this.onMobileScreen = false;
    }
  }
}
