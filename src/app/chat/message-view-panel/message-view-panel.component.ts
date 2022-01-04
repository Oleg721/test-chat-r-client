import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../models/message";
import {MessagesService} from "../../services/messages.service";

@Component({
  selector: 'app-message-view-panel',
  templateUrl: './message-view-panel.component.html',
  styleUrls: ['./message-view-panel.component.css']
})
export class MessageViewPanelComponent implements OnInit {

  @Input()messageList: Message<string>[] = []
  @Input() currentUserId: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
