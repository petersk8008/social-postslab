import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() onAdd = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {

  }

  addPost(postForm: NgForm): void {
    this.onAdd.emit({
      title: postForm.form.value.title,
      thought: postForm.form.value.thought
    });
  }

}
