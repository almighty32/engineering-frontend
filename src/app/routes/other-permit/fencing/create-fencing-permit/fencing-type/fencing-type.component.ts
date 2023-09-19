import { Component, OnInit } from '@angular/core';
import { FencingPermitModel } from '@shared/model/fencing-permit-model';
import { IFencingPermitModel } from '@shared/model/interface/ifencing-permit-model';
import { FencingPermitService } from '@shared/services/fencing-permit.service';

@Component({
  selector: 'app-fencing-type',
  templateUrl: './fencing-type.component.html',
  styleUrls: ['./fencing-type.component.scss'],
})
export class FencingTypeComponent implements OnInit {
  fencingType: IFencingPermitModel = new FencingPermitModel();

  constructor(private fencingPermitService: FencingPermitService) {}

  ngOnInit(): void {
    this.fencingPermitService.fencingPermit.subscribe(msg => {
      this.fencingType = msg;
    });
  }
}
