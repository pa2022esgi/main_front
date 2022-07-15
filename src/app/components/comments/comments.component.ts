import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: any[] = [];
  @Input() lesson: any = {};

  constructor(private commentServ: CommentService) { }

  ngOnInit(): void {
  }

  getComments(id: string) {
    this.commentServ.getComments(id).subscribe((res: any)=> {
      this.comments = res;
    });
  }

  send() {
    
  }
}
