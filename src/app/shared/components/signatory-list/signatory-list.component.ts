import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISignatory } from '@shared/model/interface/I-signatory';
@Component({
  selector: 'app-signatory-list',
  templateUrl: './signatory-list.component.html',
  styleUrls: ['./signatory-list.component.scss'],
})
export class SignatoryListComponent implements OnInit {
  @Output() deleteSignatory = new EventEmitter<any>();
  @Input() signatories: ISignatory[] = [];
  @Input() maxSignatories = 0;

  constructor() {}

  ngOnInit(): void {}

  delete(signatory: ISignatory) {
    this.deleteSignatory.emit(signatory);
  }
}
