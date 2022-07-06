import { Component, Input, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document/document.service';

@Component({
  selector: 'app-change-profil-pic',
  templateUrl: './change-profil-pic.component.html',
  styleUrls: ['./change-profil-pic.component.css'],
})
export class ChangeProfilPicComponent implements OnInit {
  @Input() img: any | null = null;

  constructor(private service: DocumentService) {}
  
  ngOnInit(): void {}

  deleteProfilPic() {
    this.service.deleteFile(this.img._id).subscribe({
      next: () => { this.img = null; },
    });
  }

  onFileChanged(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.service.uploadProfilPic(file).subscribe({
        next: (res: any) => { this.img = res; },
      });
    }
  }
}
