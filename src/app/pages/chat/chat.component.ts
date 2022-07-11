import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  messages: string[] = [];
  message: string = '';
  error: string | null = null;

  constructor(private chat: ChatService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        if (params['user-id']) {
          this.createChat(params['user-id']);
        };
    });
    this.chat.getNewMessage().subscribe((message: string) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    this.chat.sendMessage(this.message, '');
    this.message = '';
  }

  createChat(id: string) {
    this.chat.createChat(id).subscribe({
      next: (res: any) => {
        console.log(res);
      },
    });
  }
  
}
