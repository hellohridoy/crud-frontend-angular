import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: any[] = [];
  displayedColumns: string[] = ['name', 'contactNumber', 'address', 'gender', 'age', 'nid', 'sscResult', 'hscResult', 'admissionStatus', 'actions'];
  private testId: any;

  constructor(private studentService: StudentService,private  router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getAllStudents().subscribe(data => {
      this.students = data;
    });
  }

  showDetails(student: any): void {
    // Navigate to details page with student ID
    this.router.navigate(['/student-details', student.id]);
    this.router.navigate(['/student-list']);
  }




}
