import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsTableComponent } from './students-table/students-table.component';
import { StudentsMarksTableRoutingModule } from './students-marks-table-routing.module';

@NgModule({
  declarations: [StudentsTableComponent],
  imports: [
    CommonModule,
    StudentsMarksTableRoutingModule
  ]
})
export class StudentsMarksTableModule { }
