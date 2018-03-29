import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable()
export class PostService {

  posts: Post[] = [
  {
    id: 1,
    name: "Name 1",
    avatarUrl: "http://via.placeholder.com/150x150",
    largeImageUrl: "http://via.placeholder.com/600x300",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchange"
  }];

  constructor() { }

}
