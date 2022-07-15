import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-visio',
  templateUrl: './visio.component.html',
  styleUrls: ['./visio.component.css'],
})
export class VisioComponent implements OnInit, AfterViewInit {
  domain: string = 'meet.jit.si';
  room: any;
  options: any;
  api: any;
  user: any;

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.room = this.route.snapshot.paramMap.get('id');
    this.user = {
      name: (this.auth.user?.firstname ? (this.auth.user?.firstname + ' ' + this.auth.user?.lastname) : this.auth.user?.email),
    };
  }
  ngAfterViewInit(): void {
    this.options = {
      roomName: this.room,
      width: '100%',
      height: '100%',
      parentNode: document.querySelector('#jitsi-iframe'),
      userInfo: {
        displayName: this.user.name,
      },
    };

    this.api = new JitsiMeetExternalAPI(this.domain, this.options);

    this.api.addEventListeners({
      videoConferenceLeft: this.handleVideoConferenceLeft,
    });
  }

  handleVideoConferenceLeft = () => {
    this.router.navigate(['/slots']);
  };
}
