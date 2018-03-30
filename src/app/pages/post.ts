export class Post {
  name: string;
  postDate: Date;
  avatarUrl: string;
  largeImageUrl: string;
  message: string;


  constructor() {
    this.name = '';
    this.avatarUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Downtown_View_from_Sheraton_Hotel.jpg/330px-Downtown_View_from_Sheraton_Hotel.jpg';
    this.largeImageUrl = 'http://via.placeholder.com/600x300';
    this.message = '';
  }
}
