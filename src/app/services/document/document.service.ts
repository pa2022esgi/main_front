import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

const URL= "http://localhost:3000/users";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  uploadProfilPic(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(URL + '/' + this.auth.user?.id + '/documents/profile', formData);
  }

  uploadUserDocument(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(URL + '/' + this.auth.user?.id + '/documents', formData);
  }

  deleteFile(id: string) {
    return this.http.delete(URL + '/' + this.auth.user?.id + '/documents/' + id);
  }
}
