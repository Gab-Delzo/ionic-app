import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = "";
  clave: string = "";

  constructor(private router: Router,) { }

  logeado(){
    this.router.navigate(['/home'])
  }

  registro(){
    this.router.navigate(['/register'])
  }

  ngOnInit() {
  }

}
