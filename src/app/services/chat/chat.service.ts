import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { io } from 'socket.io-client';
import { AuthService } from '../auth/auth.service';
import { environment } from 'src/environments/environment';

const URL= environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private auth: AuthService, private http: HttpClient) { }

  socket = io(URL, {
    auth: {
      token : this.auth.user?.token
    },
    query: {
      userId: this.auth.user?.id
    }
  });

  public message$: BehaviorSubject<string> = new BehaviorSubject('');

  public sendMessage(message: string, user_id: string) {
    this.socket.emit('message', {message, to: user_id});
  }

  public getNewMessage = () => {
    this.socket.on('message', (message) => {
      this.message$.next(message);
    });
    
    return this.message$.asObservable();
  };

  public createChat(id: string) {
    return this.http.post(URL + '/chats', {
      creator: this.auth.user?.id,
      goal: id
    })
  }

  public getChats() {
    return this.http.get(URL + '/users/' + this.auth.user?.id + '/chats');
  }

  public getChat(id: string) {
    return this.http.get(URL + '/chats/' + id);
  }
}
