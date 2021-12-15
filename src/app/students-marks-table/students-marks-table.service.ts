import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { map,catchError } from "rxjs/operators";
import { Students } from "./Students";
@Injectable({
    providedIn:"root"
})
export class StudentsMarksTableService{

    url= "assets/apidata/studentsmarks.json";
    constructor(private http:HttpClient){

    }

    getStudentsData():Observable<Students[]>{
        return this.http.get<Students[]>(this.url)
        .pipe(
            map((res)=>{
                return res
            }),
            catchError(this.errorHandler))
    }

    errorHandler(error){
        console.log(error)
        return throwError(error) 
    }
}