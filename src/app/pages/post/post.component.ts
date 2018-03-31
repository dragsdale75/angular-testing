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
messageBoxActive: Boolean;

  constructor() {
    this.messageBoxActive = false;
  }

  ngOnInit() {
    console.log(this.post);
  }

  confirmDelete() {
    this.messageBoxActive = true;
  }

  onDeleteResponse(del: boolean) {
    this.messageBoxActive = false;

    // let answer = confirm('Are you sure?');
    if (del === true)
    {
       this.onDeletePost.emit(this.post);

    }

  }

}
