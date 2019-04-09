import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice: AuthService, private router: Router,
    private alertfy: AlertifyService) {}
  canActivate(): boolean {
    if (this.authservice.loggedIn()) {
      return true;
    }
    this.alertfy.error('What are you trying to do!! Log in please');
    this.router.navigate(['/home']);
    return true;
  }
}
