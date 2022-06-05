import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from "@angular/material/select";

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css'],
})
export class CoursComponent implements OnInit {
  num = 7;
  selected: any;

  constructor() { }

  ngOnInit(): void {
  }

}
