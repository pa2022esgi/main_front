import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  messages: any[] = [];
  chats: any[] = [];
  message: string = '';
  error: string | null = null;
  receiver: string | null = null;
  selecteds : any[] = []; 

  constructor(private chat: ChatService, private route: ActivatedRoute, private auth: AuthService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        if (params['user-id']) {
          this.createChat(params['user-id']);
        };
    });

    this.getChats();

    this.chat.getNewMessage().subscribe((message: string) => {
      this.messages.push({text: message});
    });
  }

  sendMessage() {
    this.chat.sendMessage(this.message, this.receiver!);
    
    this.message = '';
  }

  createChat(id: string) {
    this.chat.createChat(id).subscribe({
      next: (res: any) => {
        console.log(res);
      },
    });
  }

  getChats() {
    this.chat.getChats().subscribe({
      next: (res: any) => {
        this.chats = res;
        if (res.length > 0) {
          this.receiver = this.isReceiver(res[0].users)._id;
          this.selecteds.push(res[0]._id);
          this.messages = res[0].messages || [];
          console.log(res[0])
        }
      },
    });
  }

  isReceiver(users: any[]) {
    return users.find(user => user._id !== this.auth.user?.id);
  }
  
  onSelected(event: any) {
    this.receiver = this.isReceiver(this.chats.find(chat => chat._id === event[0]).users)._id
    this.chat.getChat(event[0]).subscribe((res: any) => {
      this.messages = res.messages;
    });
  }
}
