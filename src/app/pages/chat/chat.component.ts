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
  messages: string[] = [];
  chats: any[] = [];
  message: string = '';
  error: string | null = null;
  receiver: string | null = null;

  constructor(private chat: ChatService, private route: ActivatedRoute, private auth: AuthService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        if (params['user-id']) {
          this.createChat(params['user-id']);
        };
    });

    this.getChats();

    this.chat.getNewMessage().subscribe((message: string) => {
      this.messages.push(message);
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
        }
      },
    });
  }

  isReceiver(users: any[]) {
    return users.find(user => user._id !== this.auth.user?.id);
  }
  
}
