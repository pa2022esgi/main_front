import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { DocumentService } from 'src/app/services/document/document.service';
import { LessonService } from 'src/app/services/lesson/lesson.service';

@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.component.html',
  styleUrls: ['./create-lesson.component.css'],
})
export class CreateLessonComponent implements OnInit {
  lesson: any = {};
  error: string | null = null;
  file: File | null = null;

  constructor(
    private docService: DocumentService,
    private lessonService: LessonService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getLesson();
    if (!this.lesson.available) {
      this.lesson.available = true;
    }

    if (!this.lesson.online) {
      this.lesson.online = false;
    }
  }

  onFileChanged(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.file = file;
    }
  }
  getLesson() {
    this.lessonService.getUserLesson().subscribe({
      next: (res: any) => {
        this.lesson = res;
      },
      error: (err: any) => {
        this.lesson.available = true;
        this.lesson.online = false;
      }
    });
  }

  save() {
    this.error = null;
    if (!this.lesson.name) {
      this.error = 'Le nom du cours est obligatoire';
    }
    if (!this.lesson.price) {
      this.error = 'Le prix du cours est obligatoire';
    }
    if (!this.file && !this.lesson.cover) {
      this.error = 'Image de couverture obligatoire';
    }
    if (!this.lesson.text) {
      this.error = 'Un descriptif est obligatoire';
    }

    if (!this.error) {
      if (!this.lesson._id) {
        this.create();
      } else {
        this.update();
      }
    }
  }

  create() {
    this.docService.uploadDocument(this.file!).subscribe((res: any) => {
      this.lesson.file = res._id;
      this.lessonService.createLesson(this.lesson).subscribe((res: any) => {
        this.file = null;
        this.lesson = res;
        this.snackbar.open('Informations enregistrées', '', {
          duration: 2000,
          panelClass: ['snackbar'],
          verticalPosition: 'top'
        });
      });
    });
  }

  async update() {
    if (this.file) {
      let res: any = await lastValueFrom(
        this.docService.uploadDocument(this.file!)
      );
      this.lesson.file = res._id;
      this.file = null;
    } else {
      this.lesson.file = this.lesson.cover._id;
    }

    this.lessonService.updateLesson(this.lesson).subscribe((res: any) => {
      this.snackbar.open('Informations enregistrées', '', {
        duration: 2000,
        panelClass: ['snackbar'],
        verticalPosition: 'top'
      });
    });
  }

  goToLesson() {
    this.router.navigate(['/lesson', this.lesson._id]);
  }
}
