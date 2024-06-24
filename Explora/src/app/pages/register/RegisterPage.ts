import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  usuario: string = "";
  clave: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
