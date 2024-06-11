import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: any[] = [];
  showModal = false;
  studentIdToDelete: any;

  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getAllStudents().subscribe(data => {
      this.students = data;
    });
  }

  confirmDelete(studentId: number): void {
    this.studentIdToDelete = studentId;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.studentIdToDelete = null;
  }

  deleteStudent(): void {
    if (this.studentIdToDelete !== null) {
      this.studentService.deleteStudent(this.studentIdToDelete).subscribe(
        () => {
          console.log('Student deleted');
          this.loadStudents();  // Refresh the student list
          this.closeModal();
        },
        error => {
          console.error('Error deleting student:', error);
        }
      );
    }
  }
}
