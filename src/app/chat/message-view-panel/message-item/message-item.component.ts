import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {

  @Input() text: string | undefined;
  @Input() userName: string | undefined;
  @Input() date: Date | undefined;
  @Input() isCurrentUserMessage: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
