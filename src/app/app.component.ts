import { Component, ViewEncapsulation } from '@angular/core';
import { ThemeHelperService } from './core/theme-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'chat';
  width: number;
  disableHeader = false;
  disableSidenav = false;
  activeChat = false;

  constructor(private themeHelper: ThemeHelperService) {
    this.width = themeHelper.width;
    this.themeHelper.listen().subscribe(data => {
      if (data[0] === 'active:conversation') {
        if (data[1] === true) {
          this.activeChat = true
        } else {
          this.activeChat = false;
        }
      }

      if (data[0] === 'auth:active') {
        if (data[1] === true) {
          this.disableHeader = true
          this.disableSidenav = true;
        } else {
          this.disableHeader = false;
          this.disableSidenav = false;
        }
      } else {
        this.disableHeader = false;
        this.disableSidenav = false;
      }

    })

    // const token = localStorage.getItem('userToken')

    // if (token) {
    //   this.disableHeader = false;
    //   this.disbleSidenav = false;
    // } else {
    //   this.disableHeader = true;
    //   this.disbleSidenav = true;
    // }


  }

}
