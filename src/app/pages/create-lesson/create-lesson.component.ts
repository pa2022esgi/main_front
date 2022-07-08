import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DocumentService } from 'src/app/services/document/document.service';
import { LessonService } from 'src/app/services/lesson/lesson.service';

@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.component.html',
  styleUrls: ['./create-lesson.component.css']
})
export class CreateLessonComponent implements OnInit {

  lesson: any = {};
  error: string | null = null;
  file: File | null = null;

  constructor(private docService: DocumentService, private lessonService: LessonService, private snackbar: MatSnackBar) { }

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
    this.lessonService.getUserLesson().subscribe((res: any) => {
      console.log(res)
      this.lesson.name = res.name;
      this.lesson.price = res.price;
      this.lesson.text = res.text;
      this.lesson.online = res.online;
      this.lesson.available = res.available;
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
    if (!this.file) {
      this.error = 'Image de couverture obligatoire';
    }
    if (!this.lesson.text) {
      this.error = 'Un descriptif est obligatoire';
    }

    if (!this.error) {
      this.create();
    }
  }

  create() {
    this.docService.uploadDocument(this.file!).subscribe((res: any) => {
      this.lesson.file = res._id;
      this.lessonService.createLesson(this.lesson).subscribe((res: any) => {
        this.snackbar.open("Informations enregistrées", "", {
          duration: 2000,
          panelClass: ['snackbar']
        });
      });
    });
  }

}
