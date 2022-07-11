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
    this.service.getLesson(this.id!).subscribe({
      next: (res: any) => {
        this.lesson = res;
      }
    });
  }

  contact() {
    console.log('contact');
    if (!this.auth.user) {
      this.router.navigate(['/login']);
    }
  }  
}
