import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  posts: Post[] = [
    {
      title: "Weather",
      thought: "Wow, it is such a lovely day outside"
    },
    {
      title: "Look at that Doggo!",
      thought: "Today was the best! There was an amazing pup doing zoomies in the park. What a treat!"
    }
  ];

  showForm: boolean = false;

  constructor() {}

  onRemoveHandler(index: number): void {
    this.posts.splice(index, 1);
  }

  onAddHandler(newPost: object): void {
    this.posts.push(newPost);
    this.toggleForm();
  }


  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  ngOnInit() {
  }

}
