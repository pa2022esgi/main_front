import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: any = {};
  @Output() reload = new EventEmitter<void>();

  constructor(public auth: AuthService, private commentServ: CommentService) { }

  ngOnInit(): void {
  }

  deleteComment(id: string) {
    this.commentServ.delComment(id).subscribe((res: any)=> {
      this.reload.emit();
    });
  }
}
