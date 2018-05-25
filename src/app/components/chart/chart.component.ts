import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit {

  ngAfterViewInit(): void {
    // throw new Error("Method not implemented.");
    const script = document.createElement('script');
    script.src = 'assets/js/chart.js';
    document.body.appendChild(script);

    // inject data from data base --> assets/js/chart.js --> please check
    script.setAttribute("id","chart");
    script.setAttribute("data-dummy-json",[20,50,20,50,20,50,20,50].toString());
  }
  constructor() { }

  ngOnInit() {
  }

}
