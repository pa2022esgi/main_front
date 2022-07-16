import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import { SlotService } from 'src/app/services/slot/slot.service';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent | undefined;
  @Input() transactions: any[] = [];
  data: string[] = [];
  categories: string[] =[];

  public chartOptions: any;

  constructor(private slotServ: SlotService) {
    this.getSlots();
  }

  ngOnInit(): void {
  }

  getSlots() {
    this.slotServ.getAllSlots(true).subscribe((res: any) => {
      res.forEach((el: any) => {
        this.data.push((el.count*15/100).toFixed(2));
        this.categories.push(new Date( Date.parse(el.date)).toLocaleDateString("fr"));
      })

      this.setOptions();
    });
  }

  setOptions() {
    this.chartOptions = {
      series: [
        {
          name: "Gains",
          data: this.data
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Total des gains par jour",
        align: "left"
      },
      toolbar: {
        show: true,
        tools: {
          download: true,
        }
      },
      xaxis: {
        categories: this.categories
      },
    };
  }
}
