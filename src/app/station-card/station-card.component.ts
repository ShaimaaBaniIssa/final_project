import { Component, Input, OnInit } from '@angular/core';
import { StationService } from '../Services/station.service';

@Component({
  selector: 'app-station-card',
  templateUrl: './station-card.component.html',
  styleUrls: ['./station-card.component.css']
})
export class StationCardComponent{
  @Input() station :any
}
