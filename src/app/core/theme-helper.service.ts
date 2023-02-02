import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeHelperService {

  constructor() { }

  width = window.innerWidth;

  private _listeners = new Subject<any>();

  updateListner(type: string, data?: any) {
    return this._listeners.next([type, data]);
  }

  listen(): Observable<any> {
    return this._listeners.asObservable();
  }
}
