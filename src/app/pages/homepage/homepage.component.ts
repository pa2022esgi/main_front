import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  comments: any[] = [];

  constructor(private commentServ: CommentService, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
    this.getComments();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  getComments() {
    this.commentServ.popularComments().subscribe((res: any) => {
      this.comments = res;
    });
  }
}
