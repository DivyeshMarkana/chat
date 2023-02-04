import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { GroupChatComponent } from './components/group-chat/group-chat.component';
import { LoginComponent } from './components/login/login.component';
import { UserChatComponent } from './components/user-chat/user-chat.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'chat', pathMatch: 'full'
  },
  {
    path: 'chat', component: UserChatComponent
  },
  {
    path: 'group', component: GroupChatComponent
  },
  {
    path: 'login', component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
