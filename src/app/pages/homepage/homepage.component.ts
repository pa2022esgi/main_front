import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  comments: any[] = [];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  slides = [
    {img: "http://placehold.it/350x150"},
    {img: "http://placehold.it/350x150"},
    {img: "http://placehold.it/350x150"},
    {img: "http://placehold.it/350x150"}
  ];

  constructor(private commentServ: CommentService, private router: Router) { }

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
