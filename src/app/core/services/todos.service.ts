import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {TodoModel} from '../models/todoModel';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) {
  }

  public getTodos(): Observable<Array<TodoModel>> {
    return this.http.get<Array<TodoModel>>(`${environment.serverName}todos`);
  }
}
