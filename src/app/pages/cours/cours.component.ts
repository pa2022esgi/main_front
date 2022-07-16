import { Component, OnInit } from '@angular/core';
import { LessonService } from 'src/app/services/lesson/lesson.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css'],
})
export class CoursComponent implements OnInit {
  sortBy: string | null = null;
  searchQuery: string | null = null;
  online: boolean = false;
  lessons: any[] = [];

  constructor(private lessonServ: LessonService) { }

  ngOnInit(): void {
    this.search();
  }

  search() {
    this.lessonServ.getLessons(this.sortBy, this.searchQuery, this.online).subscribe((res: any) => {
      this.lessons = res;
    });
  }

  reset() {
    this.sortBy = null;
    this.searchQuery = null;
    this.online = false;
    this.search();
  }
}
