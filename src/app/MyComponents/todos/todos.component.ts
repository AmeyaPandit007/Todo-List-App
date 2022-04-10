import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  //'localItem':string;
  'todos' : Todo[];
  constructor() {
    const localItem = localStorage.getItem("todos");
    if(localItem == null)
    {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(localItem);
    }
   }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  addTodo(todo:Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  toggleTodo(todo:Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}

      // {
      //   sno:1,
      //   title: "This is Title1",
      //   desc : "Description",
      //   active:true
      // },
      // {
      //   sno:2,
      //   title: "This is Title2",
      //   desc : "Description",
      //   active:true
      // },
      // {
      //   sno:3,
      //   title: "This is Title3",
      //   desc : "Description",
      //   active:true
      // }