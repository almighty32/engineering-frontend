import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER, NINE } from '@angular/cdk/keycodes';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';

export interface Fruit {
  name: string;
}
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
export interface CharacterOfOccupancy {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subCharacterOfOccupancy?: CharacterOfOccupancy[];
}

@Component({
  selector: 'app-annual-inspection-certificate',
  templateUrl: './annual-inspection-certificate.component.html',
  styleUrls: ['./annual-inspection-certificate.component.scss'],
})
export class AnnualInspectionCertificateComponent implements OnInit {
  applicationType = new UntypedFormControl('', Validators.required);
  selectapplicationType = new UntypedFormControl('', Validators.required);
  title = 'This is page Title';
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [];
  // fruits: Fruit[] = [{name: 'Lemon'}, {name: 'Lime'}, {name: 'Apple'}];

  occupancy: CharacterOfOccupancy[] = [
    {
      name: 'GROUP A: RESIDENTIAL (DWELLINGS)',
      completed: false,
      color: 'primary',
      subCharacterOfOccupancy: [
        { name: 'SINGLE', completed: false, color: 'primary' },
        { name: 'DUPLEX', completed: false, color: 'accent' },
        { name: 'RESIDENTIAL R-1, R-2', completed: false, color: 'warn' },
        { name: 'OTHERS', completed: false, color: 'warn' },
      ],
    },
    {
      name: 'GROUP B : RESIDENTIAL',
      completed: false,
      color: 'primary',
      subCharacterOfOccupancy: [
        { name: 'HOTEL', completed: false, color: 'primary' },
        { name: 'DORMITORY', completed: false, color: 'accent' },
        { name: 'RESIDENTIAL R-3, R-4, R-5 R-1, R-2', completed: false, color: 'warn' },
        { name: 'TOWNHOUSE', completed: false, color: 'accent' },
        { name: 'BOARDING HOUSE, LODGING HOUSE', completed: false, color: 'accent' },
        { name: 'OTHERS', completed: false, color: 'warn' },
      ],
    },
    {
      name: 'GROUP C : EDUCATIONAL & RECREATIONAL',
      completed: false,
      color: 'primary',
      subCharacterOfOccupancy: [
        { name: 'SCHOOL BUILDING', completed: false, color: 'primary' },
        { name: 'CIVIC CENTER', completed: false, color: 'accent' },
        { name: 'CLUBHOUSE', completed: false, color: 'warn' },
        { name: 'SCHOOL AUDITORIUM, GYMNASIUM', completed: false, color: 'warn' },
        { name: 'CHURCH, MOSQUE, TEMPLE, CHAPEL', completed: false, color: 'warn' },
        { name: 'OTHERS', completed: false, color: 'warn' },
      ],
    },
    {
      name: 'GROUP D : INSTITUTIONAL',
      completed: false,
      color: 'primary',
      subCharacterOfOccupancy: [
        { name: 'HOSPITAL OR SIMILAR STRUCTURE', completed: false, color: 'primary' },
        { name: 'HOME FOR THE AGED', completed: false, color: 'accent' },
        { name: 'GOVERNMENT OFFICE', completed: false, color: 'warn' },
        { name: 'OTHERS', completed: false, color: 'warn' },
      ],
    },
    {
      name: 'GROUP E : COMMERCIAL',
      completed: false,
      color: 'primary',
      subCharacterOfOccupancy: [
        { name: 'BANK', completed: false, color: 'primary' },
        { name: 'DRINKING / DINING', completed: false, color: 'accent' },
        {
          name: 'SHOP (i.e. DRESS SHOP, TAILORING, BARBERSHOP, etc.)',
          completed: false,
          color: 'warn',
        },
        { name: 'SHOPPING CENTER / MALL', completed: false, color: 'warn' },
        { name: 'OTHERS', completed: false, color: 'warn' },
      ],
    },
    {
      name: 'GROUP F : LIGHT INDUSTRIAL',
      completed: false,
      color: 'primary',
      subCharacterOfOccupancy: [
        {
          name: 'FACTORY / PLANT (USING INCOMBUSTIBLE/ NON-EXPLOSIVE MATERIALS',
          completed: false,
          color: 'primary',
        },
        { name: 'OTHERS', completed: false, color: 'warn' },
      ],
    },
    {
      name: 'GROUP G : MEDIUM INDUSTRIAL',
      completed: false,
      color: 'primary',
      subCharacterOfOccupancy: [
        {
          name: 'STORAGE / WAREHOUSE (FOR HAZARDOUS/ HIGHLY FLAMMABLE MATERIALS',
          completed: false,
          color: 'primary',
        },
        {
          name: 'FACTORY (FOR HAZARDOUS/ HIGHLY FLAMMABLE MATERIALS',
          completed: false,
          color: 'accent',
        },
        { name: 'OTHERS', completed: false, color: 'warn' },
      ],
    },
    {
      name: 'GROUP H : ASSEMBLY (OCCUPANT',
      completed: false,
      color: 'primary',
      subCharacterOfOccupancy: [
        {
          name: 'THEATER, AUDITORIUM, CONVENTION HALL, GRANDSTAND/ BLEACHER',
          completed: false,
          color: 'primary',
        },
        { name: 'OTHERS', completed: false, color: 'warn' },
      ],
    },
    {
      name: 'GROUP I : ASSEMBLY (OCCUPANT',
      completed: false,
      color: 'primary',
      subCharacterOfOccupancy: [
        {
          name: 'COLISEUM, SPORTS COMPLEX, CONVENTION CENTER AND SIMILAR STRUCTURE',
          completed: false,
          color: 'primary',
        },
        {
          name: 'BARN, GRANARY, POULTRY HOUSE, PIGGERY, GRAIN MILL, GRAIN SILO',
          completed: false,
          color: 'accent',
        },
        { name: 'OTHERS', completed: false, color: 'warn' },
      ],
    },
    {
      name: 'GROUP J : (J-1) AGRICULTURAL',
      completed: false,
      color: 'primary',
      subCharacterOfOccupancy: [
        {
          name: 'PRIVATE CARPORT / GARAGE, TOWER, SWIMMING POOL, FENCE OVER 1.80m, STEEL / CONCRETE TANK',
          completed: false,
          color: 'primary',
        },
        { name: 'OTHERS', completed: false, color: 'warn' },
      ],
    },
    {
      name: 'GROUP J : (J-2) ACCESSORIES',
      completed: false,
      color: 'primary',
      subCharacterOfOccupancy: [
        { name: 'SINGLE', completed: false, color: 'primary' },
        { name: 'DUPLEX', completed: false, color: 'accent' },
        { name: 'RESIDENTIAL R-1, R-2', completed: false, color: 'warn' },
        { name: 'OTHERS', completed: false, color: 'warn' },
      ],
    },
  ];

  firstFormGroup!: UntypedFormGroup;
  secondFormGroup!: UntypedFormGroup;
  isEditable = false;
  toppings!: UntypedFormGroup;

  constructor(
    private _formBuilder: UntypedFormBuilder,
    fb: UntypedFormBuilder
    // private notificationService: NotificationService,
    // private router: Router,
    // private route: ActivatedRoute,
  ) {
    this.toppings = fb.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false,
    });
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  async onClickNext() {
    // this.notificationService.openSnackBar('Record Succesfully Saved.');

    setTimeout(() => {
      // this.router.navigate(['/permit/building']);
    }, 500);
  }

  allComplete = false;

  updateAllComplete(index: number) {
    this.allComplete =
      this.occupancy[1].subCharacterOfOccupancy != null &&
      this.occupancy[1].subCharacterOfOccupancy.every(t => t.completed);
  }

  someComplete(index: number): boolean {
    if (this.occupancy[1].subCharacterOfOccupancy == null) {
      return false;
    }
    return (
      this.occupancy[1].subCharacterOfOccupancy.filter(t => t.completed).length > 0 &&
      !this.allComplete
    );
  }

  setAll(completed: boolean, index: number) {
    this.allComplete = completed;
    if (this.occupancy[1].subCharacterOfOccupancy == null) {
      return;
    }
    this.occupancy[1].subCharacterOfOccupancy.forEach(t => (t.completed = completed));
  }
}
