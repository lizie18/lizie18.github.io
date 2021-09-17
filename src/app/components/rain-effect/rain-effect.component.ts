import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-rain-effect',
  templateUrl: './rain-effect.component.html',
  styleUrls: ['./rain-effect.component.scss']
})
export class RainEffectComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'total-heigth';
  constructor() { }

  ngOnInit(): void {
  }

}
