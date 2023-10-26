import { Component } from '@angular/core';
import { Data, Todos, UsersModel } from './users.model';
import { Observable, filter, map, take } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users$: Observable<UsersModel[]>;
  data$: Observable<Data>;
  todos$: Observable<Todos[]>;
  displayedColumns: string[] = ['id', 'name', 'grades'];
  displayedApiColumns: string[] = ['id', 'title', 'completed'];

  constructor(private usersService: UsersService) {
    this.users$ = this.usersService.getUsers().pipe(
      map(data => data.students.filter(user => user.grades > 50))
    ); 
    
    this.data$ = this.usersService.getUsers();

    this.todos$ = this.usersService.getTodos().pipe(
      map(todos => todos.filter(todo => todo.userId === 7 && todo.id <= 125))
    );
  }

}
