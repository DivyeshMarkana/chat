import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
