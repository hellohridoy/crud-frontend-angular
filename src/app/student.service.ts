// src/app/student.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl+"/all");
  }

  create(student: any): Observable<any> {
    return this.http.post(this.baseUrl+"/addStudent", student);
  }

  update(student: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${student.id}`, student);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  getStuntById(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
