import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { environment } from 'src/environments/environment';

const URL = environment.apiUrl;

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

  popularComments() {
    return this.http.get(URL + '/comments/popular');
  }

  getComments() {
    return this.http.get(URL + '/comments');
  }
}
