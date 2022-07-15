import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

const URL = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getComments(id: string) {
    return this.http.get(URL + '/lessons/' + id + '/comments');
  }

  addComment(id: string, comment: string) {
    return this.http.post(URL + '/lessons/' + id + '/comments', { comment });
  }

  delComment(id: string) {
    return this.http.delete(URL + '/comments/' + id);
  }
}
