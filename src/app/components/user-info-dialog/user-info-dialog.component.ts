import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DocumentService } from 'src/app/services/document/document.service';

@Component({
  selector: 'app-user-info-dialog',
  templateUrl: './user-info-dialog.component.html',
  styleUrls: ['./user-info-dialog.component.css']
})
export class UserInfoDialogComponent implements OnInit {
  user: any | null = null;
  constructor(public dialogRef: MatDialogRef<UserInfoDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private service: DocumentService) { }

  ngOnInit(): void {
    this.user = this.data.user;
  }

  close() {
    this.dialogRef.close();
  }

  openDocument(file_id: string, user_id: string) {
    this.service.getUserDocument(user_id, file_id).subscribe({
      next: (res: any) => {
        window.open(res, '_blank');
      },
    });
  }
}
