import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: any[] = [];
  @Input() lesson: any = {};
  comment: any = {};
  error: string | null = null;
  @Output() reload = new EventEmitter<void>();

  constructor(private commentServ: CommentService, public auth: AuthService) { }

  ngOnInit(): void {
  }

  send() {
    this.error = null

    if (!this.comment.rating) {
      this.error = 'Merci d\'indiquer un score';
    }

    if (!this.error) {
      this.commentServ.addComment(this.lesson._id, this.comment).subscribe((res: any)=> {
        this.reload.emit();
      });
    }
  }
}
