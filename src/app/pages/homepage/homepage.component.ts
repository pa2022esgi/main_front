import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Console } from 'console';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommentService } from 'src/app/services/comment/comment.service';
import { LessonService } from 'src/app/services/lesson/lesson.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  comments: any[] = [];
  lessons: any[] = [];

  constructor(private commentServ: CommentService, private router: Router, public auth: AuthService, private lessonServ: LessonService) { }

  ngOnInit(): void {
    this.getComments();
    this.getLessons();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  getComments() {
    this.commentServ.popularComments().subscribe((res: any) => {
      this.comments = res;
    });
  }

  getLessons() {
    this.lessonServ.getPopularLessons().subscribe((res: any) => {
      this.lessons = res;
    });
  }
}
