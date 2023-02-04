import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserChatComponent } from './components/user-chat/user-chat.component';
import { GroupChatComponent } from './components/group-chat/group-chat.component';
import { ChatComponent } from './components/chat/chat.component';

import { SwiperModule } from "swiper/angular";

import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { ConversationComponent } from './conversation/conversation.component';

import { MatSidenavModule } from '@angular/material/sidenav';

import { ThemeHelperService } from './core/theme-helper.service';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserChatComponent,
    GroupChatComponent,
    ChatComponent,
    ConversationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    SwiperModule,

    MatGridListModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [ThemeHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
