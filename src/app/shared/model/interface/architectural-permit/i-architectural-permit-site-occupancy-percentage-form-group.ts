import { AbstractControl, FormGroup } from '@angular/forms';
import { IArchitecturalPermitSiteOccupancyPercentage } from './i-architectural-permit-site-occupancy-percentage';

export interface IArchitecturalPermitSiteOccupancyFormGroup extends FormGroup {
  value: IArchitecturalPermitSiteOccupancyPercentage;
  controls: {
    buildingFootPrint: AbstractControl;
    imperviousSurfaceArea: AbstractControl;
    unpavedSurfaceArea: AbstractControl;
    others: AbstractControl;
    othersLabel: AbstractControl;
  };
}
