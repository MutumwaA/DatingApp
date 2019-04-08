import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { longStackSupport } from 'q';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

 model: any = {};

  constructor(public authservice: AuthService , private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
this.authservice.login(this.model).subscribe(next => {
  this.alertify.success('logged in successfully');
}, error => {
  this.alertify.error(error);
});
}
loggedIn() {
  return this.authservice.loggedIn();
}
logout() {
localStorage.removeItem('token');
this.alertify.message('logged Out');
}
}
