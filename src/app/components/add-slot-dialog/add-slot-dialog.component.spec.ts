import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSlotDialogComponent } from './add-slot-dialog.component';

describe('AddSlotDialogComponent', () => {
  let component: AddSlotDialogComponent;
  let fixture: ComponentFixture<AddSlotDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSlotDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSlotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
