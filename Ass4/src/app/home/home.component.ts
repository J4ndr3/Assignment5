import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Chart} from 'chart.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: object;
  chart=[];
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUser().subscribe(data => {
      this.users =data
      console.log(this.users)
      let keys = data['Array'].map(d=>d.VCode);
      let values = data['Array'].map(d=>d.Count);

      this.chart = new Chart('canvas',{
        type : 'bar',
        data : {
          labels :keys,
          datasets: [
            {
              data: values,
              borderColor:"#3cba9f",
              fill: false
            }
          ]
        },
        options:{
          legend:{
            display: false
          },
          title: {
            display: true,
            text: "Average grade by Department"
          },
          scales:{
            xAxes: [{
              display:true,
              barPercentage: 0.75
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      })
    })
  }
  
}
