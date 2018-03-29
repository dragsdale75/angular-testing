export class Post {
  name: string;
  postDate: Date;
  avatarUrl: string;
  largeImageUrl: string;
  message: string;


  constructor() {
    this.name = '';
    this.avatarUrl = 'http://via.placeholder.com/150x150';
    this.largeImageUrl = 'http://via.placeholder.com/600x300';
    this.message = '';
  }
}
