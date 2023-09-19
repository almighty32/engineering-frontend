import { Component, OnInit } from '@angular/core';
import { CivilStructuralPermitService } from '@shared/services/civil-structural-permit.service';

@Component({
  selector: 'app-nature-of-civil-structure-works',
  templateUrl: './nature-of-civil-structure-works.component.html',
  styleUrls: ['./nature-of-civil-structure-works.component.scss'],
})
export class NatureOfCivilStructureWorksComponent implements OnInit {
  natureOfWorks = this.civilStructuralPermitService.natureOfWorks;
  constructor(private civilStructuralPermitService: CivilStructuralPermitService) {}
  ngOnInit(): void {}
}
