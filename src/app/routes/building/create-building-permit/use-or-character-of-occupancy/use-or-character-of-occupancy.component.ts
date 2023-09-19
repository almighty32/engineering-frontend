import { Component, OnInit } from '@angular/core';
import { BuildingPermitService } from '@shared/services/building-permit.service';

export interface ICharacterOfOccupancy {
  groupName: string;
  groupDescription: string;
  completed: boolean;
  subItems?: ICharacterOfOccupancySubItem[];
}

export interface ICharacterOfOccupancySubItem {
  description: string;
  isSelected: boolean;
}

@Component({
  selector: 'app-use-or-character-of-occupancy',
  templateUrl: './use-or-character-of-occupancy.component.html',
  styleUrls: ['./use-or-character-of-occupancy.component.scss'],
})
export class UseOrCharacterOfOccupancyComponent implements OnInit {
  characterOfOccupancies: ICharacterOfOccupancy[] =
    this.buildingPermitService.characterOfOccupancies;

  buildingPermitForm = this.buildingPermitService.form;

  constructor(private buildingPermitService: BuildingPermitService) {}

  ngOnInit(): void {
    this.buildingPermitForm.reset(this.buildingPermitService.formDefault);
  }

  allComplete = false;

  updateAllComplete(subtaskIndex: number, mainIndex: number) {
    console.log(this.characterOfOccupancies[mainIndex]);
    const buildingClassification = this.characterOfOccupancies[mainIndex].groupDescription;
    this.buildingPermitForm.get('occupancyClassified')?.setValue(buildingClassification);
    this.characterOfOccupancies[mainIndex].completed =
      this.characterOfOccupancies[mainIndex].subItems != null &&
      this.characterOfOccupancies[mainIndex].subItems!.every(t => t.isSelected);
  }

  someComplete(mainIndex: number): boolean {
    if (this.characterOfOccupancies[mainIndex].subItems == null) {
      return false;
    }
    return (
      this.characterOfOccupancies[mainIndex].subItems!.filter(t => t.isSelected).length > 0 &&
      !this.characterOfOccupancies[mainIndex].completed
    );
  }

  setAll(isSelected: boolean, mainIndex: number) {
    if (this.characterOfOccupancies[mainIndex].subItems == null) {
      return;
    }
    this.characterOfOccupancies[mainIndex].completed = isSelected;
    this.characterOfOccupancies[mainIndex].subItems!.forEach(t => (t.isSelected = isSelected));
  }
}
