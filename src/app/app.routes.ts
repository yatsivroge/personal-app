import { Routes } from '@angular/router';
import { HomePageComponent } from '@pages/home-page';
import { ToDoListComponent } from '@pages/to-do-list';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'to-do-list', component: ToDoListComponent },
  { path: '**', component: HomePageComponent },
];
