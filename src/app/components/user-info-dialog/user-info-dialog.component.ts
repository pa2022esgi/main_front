import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-info-dialog',
  templateUrl: './user-info-dialog.component.html',
  styleUrls: ['./user-info-dialog.component.css']
})
export class UserInfoDialogComponent implements OnInit {
  user: any | null = null;
  constructor(public dialogRef: MatDialogRef<UserInfoDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.user = this.data.user;
  }

  close() {
    this.dialogRef.close();
  }

  openDocument(url: string) {
    window.open(url, '_blank');
  }
}
