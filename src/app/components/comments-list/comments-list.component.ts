import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  comments: any[] = [];

  headers: string[] = ['author', 'date', 'text', 'actions'];

  constructor(private commentServ: CommentService) { }

  ngOnInit(): void {
    this.getComments();
  }

  deleteComment(id: string) {
    this.commentServ.delComment(id).subscribe((res: any) => {
      this.getComments();
    });
  }

  getComments() {
    this.commentServ.getComments().subscribe((res: any) => {
      this.comments = res;
    });
  }
}
