import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[];


  constructor(private postService: PostService) {
    this.posts = postService.posts;
  }

  ngOnInit() {
  }


  onDelete(value: Post) {
    console.log('Delete Post');
    console.log(value);

     this.postService.deletePost(value);
  }



}
