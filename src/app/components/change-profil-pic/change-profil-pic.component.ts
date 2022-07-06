import { Component, Input, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document/document.service';
import { PersonalInfoService } from 'src/app/services/personal-info/personal-info.service';

@Component({
  selector: 'app-change-profil-pic',
  templateUrl: './change-profil-pic.component.html',
  styleUrls: ['./change-profil-pic.component.css'],
})
export class ChangeProfilPicComponent implements OnInit {
  @Input() img: string | null = null;

  constructor(private service: DocumentService) {}
  
  ngOnInit(): void {}

  modifyProfilPic() {
    console.log('modifyProfilPic');
  }

  onFileChanged(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.service.uploadProfilPic(file).subscribe({
        next: (res: any) => { this.img = res.url; },
      });
    }
  }
}
