import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeHelperService } from 'src/app/core/theme-helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  width;

  constructor(
    private themeHelper: ThemeHelperService,
    private router: Router
  ) {
    // this.themeHelper.listen().subscribe(data => {})
    this.themeHelper.updateListner('auth:active', true);

    this.width = this.themeHelper.width;

  }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['/chat']);
    // window.location.reload()
  }

}
