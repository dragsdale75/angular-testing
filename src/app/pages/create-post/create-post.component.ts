import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  postForm: FormGroup;

  newPost: Post;

  // noValidationError: Boolean;
  // errorMessage: string;

  // avatarUrlError: string;
  // largImageUrlError: string;
  // messageError: string;

  constructor(private postService: PostService, private fb: FormBuilder) {
    this.newPost = new Post();
    // this.noValidationError = true;
    // this.errorMessage = '';
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.postForm = this.fb.group({
      name: ['', Validators.required],
      avatarUrl: ['', Validators.required],
      largeImageUrl: ['', Validators.required],
      message: ['', Validators.required]
    });
  }



// nameValidationError() {
//   // if (this.newPost.name.length < this.newPost.minNameLength()) {
//   //   return 'Please enter your name';
//   // }

// }


  // validateForm(): string {
  //   this.errorMessage = '';
  //   if (this.newPost.name === '') {
  //     this.errorMessage += 'Please enter your name \n';
  //     this.noValidationError = false;
  //   }
  //   if (this.newPost.avatarUrl === '') {
  //     this.errorMessage += 'Please enter an Avatar URL \n';
  //     this.noValidationError = false;
  //   }
  //   if (this.newPost.largeImageUrl === '') {
  //     this.errorMessage += 'Please enter an Image URL \n';
  //     this.noValidationError = false;
  //   }
  //   if (this.newPost.message === '') {
  //     this.errorMessage += 'Please enter a Message \n';
  //     this.noValidationError = false;
  //   }


  //   return this.errorMessage;
  // }


  onSubmit() {
      this.newPost.postDate = new Date();
      this.postService.createPost(this.newPost);
      // Reset the form for the next entry
      this.newPost = new Post();

  }

}
