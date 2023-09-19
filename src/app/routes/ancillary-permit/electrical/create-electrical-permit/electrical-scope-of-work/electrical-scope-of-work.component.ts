import { Component, OnInit } from '@angular/core';
import { IElectricalPermit } from '@shared/model/interface/electrical-permit/i-electrical-permit-model';
import { ElectricalPermitService } from '@shared/services/electrical-permit.service';

@Component({
  selector: 'app-electrical-scope-of-work',
  templateUrl: './electrical-scope-of-work.component.html',
  styleUrls: ['./electrical-scope-of-work.component.scss'],
})
export class ElectricalScopeOfWorkComponent implements OnInit {
  scopeOfWorks = this.epService.scopeOfWorks;
  constructor(private epService: ElectricalPermitService) {}
  ngOnInit(): void {}
}
