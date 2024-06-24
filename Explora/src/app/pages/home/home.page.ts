import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  usuarioHome: string = "";

  constructor(private activerouter: ActivatedRoute, private router: Router){}

  Europa(){
    this.router.navigate(['/Europa'])
  }

  Asia(){
    this.router.navigate(['/Asia'])
  }

  ngOnInit() {
  }
}
