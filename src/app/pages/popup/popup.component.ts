import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @Output() onDeleteResponse = new EventEmitter<boolean>();
  ngOnInit(): void {
  }


  reply(answer: boolean) {
    this.onDeleteResponse.emit(answer);
  }


}
