import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../../animations';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
  animations : [ slideInAnimation ]
})
export class FullLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  getAnimationData(routerOutlet : RouterOutlet){
    return routerOutlet && routerOutlet.activatedRouteData && routerOutlet.activatedRouteData.animation
  }

}
