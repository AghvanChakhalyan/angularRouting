import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {TodoComponent} from './pages/todo/todo.component';
import {TodosService} from './core/services/todos.service';
import {HomeComponent} from './pages/home/home.component';
import {AlbumsService} from './core/services/albums.service';
import {AlpumsComponent} from './pages/alpums/alpums.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'album',
    component: AlpumsComponent
  },
  {
    path: '**',
    component: HomeComponent
}
]
;


@NgModule({

  declarations: [
    AppComponent,
    TodoComponent,
    AlpumsComponent,
    HomeComponent,

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [TodosService, AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
