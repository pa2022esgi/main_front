import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.component.html',
  styleUrls: ['./create-lesson.component.css']
})
export class CreateLessonComponent implements OnInit {

  lesson: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  onFileChanged(event: any) {
  }

}
