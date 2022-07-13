import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSlotDialogComponent } from 'src/app/components/add-slot-dialog/add-slot-dialog.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LessonService } from 'src/app/services/lesson/lesson.service';
import { SlotService } from 'src/app/services/slot/slot.service';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {
  lesson: any = {}
  slots: any[] = [];
  type: string = 'incoming';

  constructor(public dialog: MatDialog, private lessonServ: LessonService, private slotServ: SlotService, public auth: AuthService) { }

  ngOnInit(): void {
    if (this.auth.user!.role === 'élève') {
      this.getSlots();
    } else {
      this.getLesson();
    }
  }

  getLesson() {
    this.lessonServ.getUserLesson().subscribe((res: any) => {
      this.lesson = res;
      this.getSlots();
    });
  }

  getSlots() {
    if (this.auth.user!.role === 'élève') {
      this.slotServ.getMySlots(this.type).subscribe((res: any) => {
        this.slots = res;
      });
    } else {
      if (this.lesson) {
        this.slotServ.getSlots(this.lesson._id, this.type).subscribe((res: any) => {
          this.slots = res;
        });
      }
    }
  }

  addSlot() {
    const diag = this.dialog.open(AddSlotDialogComponent, {
      width: '600px',
      data: this.lesson,
      autoFocus: false,
      disableClose: true, 
    });

    diag.componentInstance.reload.subscribe(() => {
      this.getSlots();
    });
  }
}
