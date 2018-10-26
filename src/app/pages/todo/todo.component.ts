import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {TodoModel} from '../../core/models/todoModel';
import {TodosService} from '../../core/services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todos: Array<TodoModel> = [];

  constructor(private activeRoute: ActivatedRoute, private todo: TodosService) {
  }

  ngOnInit() {
    this.todo.getTodos()
      .subscribe((data: Array<TodoModel>) => {
        this.todos = data;
      }, (err) => {
      });
  }

}
