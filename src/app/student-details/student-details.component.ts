import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  student: any;
   testId: string | undefined;

  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {


  }

  loadStudentDetails(studentId: number): void {
    this.studentService.getStudentById(studentId).subscribe(data => {
      this.student = data;
    });
  }
}
