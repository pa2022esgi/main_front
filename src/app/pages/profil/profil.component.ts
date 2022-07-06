import { Component, OnInit } from '@angular/core';
import { PersonalInfoService } from 'src/app/services/personal-info/personal-info.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user: any | null = null;

  constructor(private service: PersonalInfoService) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    this.service.getPersonalInfo().subscribe({
      next: (res: any) => {
        this.user = res;
      }
    });
  }

}
