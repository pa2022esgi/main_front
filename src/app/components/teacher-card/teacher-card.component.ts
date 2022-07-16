import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-card',
  templateUrl: './teacher-card.component.html',
  styleUrls: ['./teacher-card.component.css']
})
export class TeacherCardComponent implements OnInit {

  @Input() lesson: any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToLesson() {
    this.router.navigate(['/lesson', this.lesson._id]);
  }
}
