// src/app/student.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Student} from "./student.model";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getStudents() {
    throw new Error('Method not implemented.');
  }

  private baseUrl = 'http://localhost:8080/students';

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<any> {
    return this.http.get(this.baseUrl+"/all");
  }

  createStudent(student: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+"/addStudent", student);
  }

  updateStudent(student: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${student.id}`, student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  getStudentById(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
