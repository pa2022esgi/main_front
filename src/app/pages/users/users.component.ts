import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users_list:{id:number,firstname:string, lastname:string, type:string, age:number}[] = [
    {
      id:0,
      firstname:"Charles",
      lastname:"Cretois",
      type:"admin",
      age:21,
    },
    {
      id:1,
      firstname:"Pierre",
      lastname:"Bonamy",
      type:"student",
      age:22,
    },
    {
      id:2,
      firstname:"TianQi",
      lastname:"An",
      type:"teacher",
      age:26,
    },
    {
      id:0,
      firstname:"Charles",
      lastname:"Cretois",
      type:"admin",
      age:21,
    },
    {
      id:1,
      firstname:"Pierre",
      lastname:"Bonamy",
      type:"student",
      age:22,
    },
    {
      id:2,
      firstname:"TianQi",
      lastname:"An",
      type:"teacher",
      age:26,
    },    {
      id:0,
      firstname:"Charles",
      lastname:"Cretois",
      type:"admin",
      age:21,
    },
    {
      id:1,
      firstname:"Pierre",
      lastname:"Bonamy",
      type:"student",
      age:22,
    },
    {
      id:2,
      firstname:"TianQi",
      lastname:"An",
      type:"teacher",
      age:26,
    },    {
      id:0,
      firstname:"Charles",
      lastname:"Cretois",
      type:"admin",
      age:21,
    },
    {
      id:1,
      firstname:"Pierre",
      lastname:"Bonamy",
      type:"student",
      age:22,
    },
    {
      id:2,
      firstname:"TianQi",
      lastname:"An",
      type:"teacher",
      age:26,
    },
  ];

  headers:string[] = ["id","firstname","lastname","type","age","actions"];
  constructor() {
  }

  ngOnInit(): void {
  }

}
