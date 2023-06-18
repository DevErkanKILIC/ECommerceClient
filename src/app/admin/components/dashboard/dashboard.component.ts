import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  d() {
    this.alertify.dismissAll();
  }

  m() {

    this.alertify.message("alertify test", {
      delay: 3,
      dismissOthers: false,
      position: Position.BottomCenter,
      messageType: MessageType.Message
    });
  }
}

