import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ISignatory } from '@shared/model/interface/I-signatory';
import { FormService } from '@shared/services/form.service';
import { SignatoryService } from '@shared/services/signatory.service';
@Component({
  selector: 'app-signatory-fields',
  templateUrl: './signatory-fields.component.html',
  styleUrls: ['./signatory-fields.component.scss'],
})
export class SignatoryFieldsComponent implements OnInit {
  @Input() label = '';
  @Output() selectSignatory = new EventEmitter<any>();

  // @Input() defaultSignatory: any;
  signatoryControl = new FormControl();
  signatories: ISignatory[] = [];

  constructor(private signatoryService: SignatoryService, public formService: FormService) {}

  ngOnInit(): void {
    this.signatoryService.findAll();
    this.signatoryService.signatoryList.subscribe(signatories => {
      this.signatories = signatories;
    });
  }
  selectOption(event: any) {
    this.selectSignatory.emit({
      fieldName: this.label,
      signatory: event,
    });
  }
}
