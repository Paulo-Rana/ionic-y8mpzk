import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
compute(){
  this.UnitPriceA=(this.initCostA / this.initVolumeA) * 1000; this.UnitPriceB=this.initCostB / this.initVolumeB; this.YouSaved=((this.initCostA / this.initVolumeA) *1000) - this.initCostB / this.initVolumeB
  }

}
