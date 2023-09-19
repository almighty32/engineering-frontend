import { Component, OnInit } from '@angular/core';
import { IPlumbingPermitFixture, IPlumbingPermitFixtureSystem } from '@shared/model/interface/plumbing-permit/i-plumbing-permit-fixtures';
import { PlumbingPermitService } from '@shared/services/plumbing-permit.service';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.scss'],
})
export class FixtureComponent implements OnInit {
  fixtures: IPlumbingPermitFixture[] = this.plumbingPermitService.fixtures;
  fixturesSystem: IPlumbingPermitFixtureSystem[] = this.plumbingPermitService.fixturesSystems;
  
  constructor(private plumbingPermitService: PlumbingPermitService) {}

  ngOnInit(): void {}
}
