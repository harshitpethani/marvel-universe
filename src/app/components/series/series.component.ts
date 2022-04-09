import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent implements OnInit {

  @Input() series: any;
  
  constructor() { }

  ngOnInit() {}

}
