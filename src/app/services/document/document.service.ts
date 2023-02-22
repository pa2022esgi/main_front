import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { environment } from 'src/environments/environment';

const URL= environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  uploadProfilPic(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(URL + '/users/' + this.auth.user?.id + '/documents/profile', formData);
  }

  uploadDocument(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(URL + '/documents', formData);
  }

  uploadUserDocument(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(URL + '/users/' + this.auth.user?.id + '/documents', formData);
  }

  getUserDocument(user_id: string , file_id: string) {
    return this.http.get(URL + '/users/' + user_id + '/documents/' + file_id);
  }

  deleteFile(id: string) {
    return this.http.delete(URL + '/users/' + this.auth.user?.id + '/documents/' + id);
  }
}
