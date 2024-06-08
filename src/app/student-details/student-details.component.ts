import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-student-details',
  template: `
    <h1 mat-dialog-title>Student Details</h1>
    <div mat-dialog-content>
      <p><strong>ID:</strong> {{data.id}}</p>
      <p><strong>Name:</strong> {{data.name}}</p>
      <p><strong>Contact Number:</strong> {{data.contactNumber}}</p>
      <p><strong>Address:</strong> {{data.address}}</p>
      <p><strong>Gender:</strong> {{data.gender}}</p>
      <p><strong>Age:</strong> {{data.age}}</p>
      <p><strong>NID:</strong> {{data.nid}}</p>
      <p><strong>SSC Result:</strong> {{data.sscResult}}</p>
      <p><strong>HSC Result:</strong> {{data.hscResult}}</p>
      <p><strong>Admission Status:</strong> {{data.admissionStatus}}</p>
      <p><strong>Created At:</strong> {{data.createdAt | date}}</p>
      <p><strong>Updated At:</strong> {{data.updatedAt | date}}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </div>
  `,
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
