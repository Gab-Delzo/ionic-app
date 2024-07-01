import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
clima() {
throw new Error('Method not implemented.');
}
  usuarioHome: string = "";

  constructor(private activerouter: ActivatedRoute, private router: Router){}

  europa(){
    this.router.navigate(['/europa'])
  }

  asia(){
    this.router.navigate(['/asia'])
  }

  africa(){
    this.router.navigate(['/africa'])
  }

  ngOnInit() {
  }
}
