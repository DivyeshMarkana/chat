import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ThemeHelperService } from '../core/theme-helper.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        // display: 'block',
        transform: 'translate3d(0,0,0)',
        // visibility: 'visible'
      })),
      state('out', style({
        // display: 'none',
        transform: 'translate3d(100%, 0, 0)',
        // visibility: 'hidden'

      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class ConversationComponent implements OnInit {

  constructor(private themeHelper: ThemeHelperService) { }

  ngOnInit(): void {
  }

  menuState: string = 'out';

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  close() {
    this.menuState = 'out'
  }

}
