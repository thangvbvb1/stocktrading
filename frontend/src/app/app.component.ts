import { Component } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  user: SocialUser;

  constructor(private authService: SocialAuthService) {
  }

  ngOnInit(): void {  }
}
