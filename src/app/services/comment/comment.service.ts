import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

const URL = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  addComment(id: string, comment: any) {
    return this.http.post(URL + '/lessons/' + id + '/comments', {
      "text": comment.text,
      "rating": comment.rating
    });
  }

  delComment(id: string) {
    return this.http.delete(URL + '/comments/' + id);
  }
}
