import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit {

  timeStability!:number
  dimensionnalEnergy!:number
  physicalIntegrity!:number
  mentalIntegrity!:number

  ngOnInit(): void {
    this.timeStability = 90
    this.dimensionnalEnergy = 60
    this.physicalIntegrity = 50
    this.mentalIntegrity = 0
  }

}
