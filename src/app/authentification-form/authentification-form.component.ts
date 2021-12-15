import {Component, Input, OnInit, OnChanges, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentification-form',
  templateUrl: './authentification-form.component.html',
  styleUrls: ['./authentification-form.component.css']
})
export class AuthentificationFormComponent implements OnInit {

  @Input() url : string | undefined;
  @Input() userName: string = "";
  @Input() password: string = "";
  @Input() role: string = "user";
  constructor(private router: Router) { }

  @Output() onClickHendler(): void {
    console.log(this.userName);
    console.log(this.password);
    console.log(this.role);
  }

  ngOnInit(): void {
    this.url = this.router.url;
  }

}
