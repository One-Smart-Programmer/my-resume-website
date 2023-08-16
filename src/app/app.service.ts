import { Injectable } from '@angular/core';

import { Section, AppData } from '../model/Sections';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { 
  }

  public navigate(path: string) : void {
    location.href = path;
  }
  
  public readApplicationData(): Section[] {
    return AppData.data;
  }
  
  public readApplicationDataSize(): number {
    return AppData.data.length;
  }

  public screenResizeObservable(): Observable<{innerWidth: number, innerHeight: number}> {
    return fromEvent(window, 'resize').pipe(map(t => {
      let target = t.target as Window;
      return {innerWidth: target.innerWidth, innerHeight: target.innerHeight};
    }));
  }

  public generateCardIdValuefromTitle(title: string): string {
    return title.toLowerCase().replaceAll(' ', '-');
  }
}