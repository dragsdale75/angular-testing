import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  newPost: Post;
  noValidationError: Boolean;
  errorMessage: string;

  constructor(private postService: PostService) {
    this.newPost = new Post();
    this.noValidationError = true;
    this.errorMessage = '';
  }

  ngOnInit() {
  }

  validateForm(): string {
    this.errorMessage = '';
    if (this.newPost.name === "") {
      this.errorMessage += 'Please enter your name \n';
      this.noValidationError = false;
    }
    if (this.newPost.avatarUrl === '') {
      this.errorMessage += 'Please enter an Avatar URL \n';
      this.noValidationError = false;
    }
    if (this.newPost.largeImageUrl === '') {
      this.errorMessage += 'Please enter an Image URL \n';
      this.noValidationError = false;
    }
    if (this.newPost.message === '') {
      this.errorMessage += 'Please enter a Message \n';
      this.noValidationError = false;
    }


    return this.errorMessage;
  }


  onSubmit() {
    let validationMessage = this.validateForm();
    if (validationMessage == '') {
      this.noValidationError = true;
      this.newPost.postDate = new Date();
      this.postService.createPost(this.newPost);
      this.newPost = new Post();
    }



  }

}
