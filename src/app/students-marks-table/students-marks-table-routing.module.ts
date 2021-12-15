import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsTableComponent } from './students-table/students-table.component';

const routes: Routes = [
  { path: "", component: StudentsTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsMarksTableRoutingModule { }
