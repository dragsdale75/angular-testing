import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable()
export class PostService {

  posts: Post[] = [
    {
      name: "Joe Schmo",
      avatarUrl: "http://via.placeholder.com/150x150",
      largeImageUrl: "http://via.placeholder.com/600x300",
      postDate: new Date('April 15, 2017'),
      message: "Phasallus finisbus nisi urna, in venenatis nisel congue volutpat. Nunc eros ipsum, effictur sit ||Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchange"
    }, {
      name: "Joe Schmo",
      avatarUrl: "http://via.placeholder.com/150x150",
      largeImageUrl: "http://via.placeholder.com/600x300",
      postDate: new Date('April 15, 2017'),
      message: "Phasallus finisbus nisi urna, in venenatis nisel congue volutpat. Nunc eros ipsum, effictur sit ||Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchange"
    }

  ];

  constructor() {
  }

  createPost(newPost: Post) {
    this.posts.push(newPost);

  }

  deletePost(post: Post) {
    let i = this.posts.indexOf(post);
    if (i >= 0) {
      this.posts.splice(i, 1);
    }
  }

}
