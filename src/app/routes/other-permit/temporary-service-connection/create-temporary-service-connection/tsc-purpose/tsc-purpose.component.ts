import { Component, OnInit } from '@angular/core';
import { FencingPermitModel } from '@shared/model/fencing-permit-model';
import { IFencingPermitModel } from '@shared/model/interface/ifencing-permit-model';
import { ITemporaryServiceConnectionModel } from '@shared/model/interface/itemporary-service-connection-model';
import { TemporaryServiceConnectionModel } from '@shared/model/temporary-service-connection-model';
import { FencingPermitService } from '@shared/services/fencing-permit.service';
import { TemporaryServiceConnectionPermitService } from '@shared/services/temporary-service-permit.service';

@Component({
  selector: 'app-tsc-purpose',
  templateUrl: './tsc-purpose.component.html',
  styleUrls: ['./tsc-purpose.component.scss'],
})
export class TscPurposeComponent implements OnInit {
  tscPurpose: ITemporaryServiceConnectionModel = new TemporaryServiceConnectionModel();

  constructor(private tscService: TemporaryServiceConnectionPermitService) {}

  ngOnInit(): void {
    this.tscService.tscPermit.subscribe(msg => {
      this.tscPurpose = msg;
    });
  }
}
