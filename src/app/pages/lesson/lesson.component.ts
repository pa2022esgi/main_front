import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LessonService } from 'src/app/services/lesson/lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  id: string | null = null;
  lesson: any | null = null;
  constructor(private route: ActivatedRoute, private service: LessonService, public auth: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getLesson();
  }

  getLesson() {
    let user: string | null = null
    if (this.auth.user) {
      user = this.auth.user.id
    }
    this.service.getLesson(this.id!, user).subscribe({
      next: (res: any) => {
        this.lesson = res;
      }
    });
  }

  contact() {
    if (!this.auth.user) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/chat'], {queryParams : {'user-id': this.lesson.user._id}});
    }
  } 

  calculateRating() {
    let rating = 0;

    if (this.lesson.comments) {
      this.lesson.comments.forEach((comment: any )=> {
        rating += comment.rating;
      });
    }
    
    return rating / this.lesson.comments.length;
  }
  
}
