import { Component, OnInit } from '@angular/core';
import { BuildingPermitCertificateService } from '@shared/services/building-permit-certificate.service';

@Component({
  selector: 'app-building-permit-create-certificate',
  templateUrl: './building-permit-create-certificate.component.html',
  styleUrls: ['./building-permit-create-certificate.component.scss'],
})
export class BuildingPermitCreateCertificateComponent implements OnInit {
  form = this.bpCertificateService.form;
  constructor(private bpCertificateService: BuildingPermitCertificateService) {}

  ngOnInit(): void {}
}
