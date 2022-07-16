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
  selecteds : any[] = [];
  instance: any;

  constructor(private chat: ChatService, private route: ActivatedRoute, public auth: AuthService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        if (params['user-id']) {
          this.createChat(params['user-id']);
        }else {
          this.getChats();
        }
    });

    this.instance = this.chat.getNewMessage().subscribe((message: any) => {

      if (message !== "") {
        const chat = this.chats.find(chat => chat._id === message.chat._id);
        if (chat) {
          if (chat._id === this.selecteds[0]) {
            const found: any = this.messages.find((msg: any) => msg._id === message.msg._id);

            if (!found) {
              this.messages.push(message.msg);
            }
          }
        } else {
          this.getChats();
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.instance.unsubscribe();
  }

  sendMessage() {
    this.chat.sendMessage(this.message, this.isReceiver(this.chats.find(chat => chat._id === this.selecteds[0]).users)._id);
    this.messages.push({
      text: this.message,
      user: this.isSender(this.chats.find(chat => chat._id === this.selecteds[0]).users),
      createdAt: new Date(),
    });
    this.message = '';
  }

  createChat(id: string) {
    this.chat.createChat(id).subscribe({
      next: (res: any) => {
        this.getChats();
      },
      error: (err: any) => {
        this.getChats();
      },
    });
  }

  getChats() {
    this.chat.getChats().subscribe({
      next: (res: any) => {
        this.chats = res;
        if (res.length > 0) {
          this.selecteds.push(res[0]._id);
          this.messages = res[0].messages || [];
        }
      },
    });
  }

  isReceiver(users: any[]) {
    return users.find(user => user._id !== this.auth.user?.id);
  }

  isSender(users: any[]) {
    return users.find(user => user._id === this.auth.user?.id);
  }
  
  onSelected(event: any) {
    this.chat.getChat(event[0]).subscribe((res: any) => {
      this.messages = res.messages;
    });
  }
}
