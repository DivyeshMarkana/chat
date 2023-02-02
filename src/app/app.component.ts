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

  constructor(private themeHelper: ThemeHelperService) {
    this.width = themeHelper.width;
    this.themeHelper.listen().subscribe(data => {
      if (data[0] === 'active:conversation') {
        if (data[1] === true) {
          this.disableHeader = true
        } else {
          this.disableHeader = false;
        }
      }
    })
  }

}
