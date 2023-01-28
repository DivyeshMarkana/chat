import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeHelperService {

  constructor() { }

  private _listeners = new Subject<any>();

  updateListner(type: string, data?: any) {
    return this._listeners.next([type, data]);
  }

  listen(): Observable<any> {
    return this._listeners.asObservable();
  }
}
