import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-documents',
  templateUrl: './change-documents.component.html',
  styleUrls: ['./change-documents.component.css']
})
export class ChangeDocumentsComponent implements OnInit {
  @Input() documents: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

  uploadDoc() {

  }
}
