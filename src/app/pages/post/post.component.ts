import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';
import { log } from 'util';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

@Input() post: Post;
@Output() onDeletePost = new EventEmitter<Post>();


  constructor() { }

  ngOnInit() {
    console.log(this.post);
  }

  deletePost() {

    let answer = confirm('Are you sure?');
    if (answer === true)
    {
       this.onDeletePost.emit(this.post);

    }

  }

}
