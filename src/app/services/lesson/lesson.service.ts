import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

const URL= "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  createLesson(lesson: any) {
    return this.http.post(URL + '/users/' + this.auth.user?.id + '/cours', {
      "name" : lesson.name,
      "price": lesson.price,
      "text": lesson.text,
      "online": lesson.online,
      "available": lesson.available,
      "file": lesson.file
    });
  }

  getUserLesson() {
    return this.http.get(URL + '/users/' + this.auth.user?.id + '/cours');
  }

  getLesson(id: string, user: string | null) {
    return this.http.get(URL + '/cours/' + id + "?user=" + user);
  }

  getLessons(sortBy: string | null, searchQuery: string | null, online: boolean) {
    return this.http.get(URL + '/cours?sortBy=' + sortBy + "&search=" + searchQuery + "&online=" + online);
  }

  getPopularLessons() {
    return this.http.get(URL + '/cours/popular');
  }

  updateLesson(lesson: any) {
    return this.http.put(URL + '/cours/' + lesson._id, {
      "name" : lesson.name,
      "price": lesson.price,
      "text": lesson.text,
      "online": lesson.online,
      "available": lesson.available,
      "file": lesson.file
    });
  }
}
