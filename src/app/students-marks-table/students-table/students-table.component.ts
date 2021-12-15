import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Students } from '../Students';
import { StudentsMarksTableService } from '../students-marks-table.service';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {

  constructor(private studentService: StudentsMarksTableService) { }
  studentsDetails: Students[];
  studentsNarksDetails: Students[];
  headers:any[];
  count: number = 0
  ngOnInit() {
    this.studentService.getStudentsData().subscribe((res: Students[]) => {
      this.studentsDetails = res;
      this.studentsNarksDetails = [...res];
      console.log(this.studentsDetails)
      this.headers = Object.keys(this.studentsDetails[0])
      console.log(this.headers)
    })
  }

  sortHeader(header){
    this.count++
    if(this.count == 1){
      this.studentsDetails.sort( (a,b)=>{
        if ( a[header] < b[header]){
          return -1;
        }
        if ( a[header] > b[header]){
          return 1;
        }
        return 0;
      })
    } else if(this.count == 2){
      this.studentsDetails.sort( (a,b)=>{
        if ( a[header] < b[header]){
          return 1;
        }
        if ( a[header] > b[header]){
          return -1;
        }
        return 0;
      })
    }else if (this.count ==3){
      this.studentsDetails = [...this.studentsNarksDetails];
      this.count = 0
    }
  }

}
