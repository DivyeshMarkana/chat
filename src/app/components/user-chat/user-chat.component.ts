import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ThemeHelperService } from 'src/app/core/theme-helper.service';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserChatComponent implements OnInit {

  @ViewChild('drawer') public drawer: MatDrawer;

  constructor(private themeHelper: ThemeHelperService) {
    this.themeHelper.listen().subscribe((data) => {
      if (data[0] === 'toggle-conversation-side') {
        this.drawer.toggle();
        if (data[1] === 'show') {
          console.log(data[1]);
          console.log('side nav is showed');
        } else if (data[1] === 'hide') {
          console.log(data[1]);
          console.log('side nav is hidden');
        }

      }
    })
  }

  ngOnInit(): void {
  }

}
