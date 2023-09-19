import { Component, OnInit } from '@angular/core';
import { ConstructionLocationService } from '@shared/services/construction-location.service';

@Component({
  selector: 'app-location-of-construction',
  templateUrl: './location-of-construction.component.html',
  styleUrls: ['./location-of-construction.component.scss'],
})
export class LocationOfConstructionComponent implements OnInit {
  constructionLocationForm = this.constructionLocation.form;

  constructor(private constructionLocation: ConstructionLocationService) {}

  ngOnInit(): void {}
}
