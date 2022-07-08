import { Component, Input, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document/document.service';

@Component({
  selector: 'app-change-documents',
  templateUrl: './change-documents.component.html',
  styleUrls: ['./change-documents.component.css']
})
export class ChangeDocumentsComponent implements OnInit {
  @Input() documents: Array<any> = [];

  constructor(private service: DocumentService) { }

  ngOnInit(): void {
  }

  onFileChanged(event: any) {
    let files: File[] = Array.from(event.target.files)

    files.forEach((file: File) => {
      if (file) {
        this.service.uploadUserDocument(file).subscribe({
          next: (res: any) => { this.documents.push(res) },
        });
      }
    });
  }

  deleteDocument(id: string) {
    this.service.deleteFile(id).subscribe({
      next: () => { this.documents.splice(this.documents.findIndex(doc => doc._id === id), 1) },
    });
  }

  openDocument(url: string) {
    window.open(url, '_blank');
  }
}
