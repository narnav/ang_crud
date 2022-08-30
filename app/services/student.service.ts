import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  SERVER_URL = "http://localhost:3000/students/"

  constructor(private http: HttpClient) { 
  }

  getStudents():Observable<Student[]> {
    return this.http.get<Student[]>(this.SERVER_URL);
  }

  delStudent(id:any):Observable<any> {
    return this.http.delete<any>(this.SERVER_URL +id);
  }

  addStudent(new_student:any):Observable<Student>{
    return this.http.post<Student>(this.SERVER_URL,new_student );
  }

  
  getStudent(id:any):Observable<any> {
    return this.http.get<any>(this.SERVER_URL +id);
  }
}
