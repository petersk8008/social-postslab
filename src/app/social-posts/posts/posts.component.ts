import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() post: object;
  @Input() postIndex: number;
  @Output() onRemove = new EventEmitter<number>();
  constructor() {}

  removePost(index: number): void {
    this.onRemove.emit(index);
  }

  ngOnInit() {
  }

}
