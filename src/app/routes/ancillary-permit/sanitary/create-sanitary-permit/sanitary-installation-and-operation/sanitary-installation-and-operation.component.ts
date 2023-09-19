import { Component, OnInit } from '@angular/core';
import { ISanitarySystemOfDisposal } from '@shared/model/interface/sanitary-permit/i-sanitary-system-of-disposal';
import { ISanitaryWaterSupply } from '@shared/model/interface/sanitary-permit/i-sanitary-water-supply';
import { SanitaryPermitService } from '@shared/services/sanitary-permit.service';

@Component({
  selector: 'app-sanitary-installation-and-operation',
  templateUrl: './sanitary-installation-and-operation.component.html',
  styleUrls: ['./sanitary-installation-and-operation.component.scss'],
})
export class SanitaryInstallationAndOperationComponent implements OnInit {
  systemOfDisposals: ISanitarySystemOfDisposal[] = this.sanitaryService.systemOfDisposals;
  waterSupplies: ISanitaryWaterSupply[] = this.sanitaryService.waterSupplies;

  constructor(private sanitaryService: SanitaryPermitService) {}

  ngOnInit(): void {}
}
