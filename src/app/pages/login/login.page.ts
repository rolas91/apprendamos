import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('slidePrincipal') slides:IonSlides;

  constructor() { }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    this.slides.lockSwipes(true);
  }

  viewLogin(){
    this.slides.lockSwipes(false);   
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);   
  }

  viewRegister(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

}
