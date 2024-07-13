import { Routes } from "@angular/router";

import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ToDoListComponent } from "./pages/to-do-list/to-do-list.component";

export const routes: Routes = [
    { path: "", component: HomePageComponent },
    { path: "to-do-list", component: ToDoListComponent },
];
