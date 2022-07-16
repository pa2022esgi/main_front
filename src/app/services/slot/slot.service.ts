import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';


const URL= "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class SlotService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  createSlot(slot: any, lessonId: string) {
    return this.http.post(URL + '/cours/' + lessonId + '/slots', slot)
  }

  getSlots(lessonId: string, type: string) {
    return this.http.get(URL + '/cours/' + lessonId + '/slots?type=' + type);
  };

  getMySlots(type: string) {
    return this.http.get(URL + '/users/' + this.auth.user?.id + '/slots?type=' + type);
  }

  deleteSlot(slotId: string) {
    return this.http.delete(URL + '/slots/' + slotId);
  }

  paySlot(slotId: string) {
    return this.http.put(URL + '/slots/' + slotId + '/pay', {});
  }

  getAllSlots() {
    return this.http.get(URL + '/slots');
  }
}
