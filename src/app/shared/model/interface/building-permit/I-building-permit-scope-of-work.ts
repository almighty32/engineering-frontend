import { ICharacterOfOccupancy } from 'app/routes/building/create-building-permit/use-or-character-of-occupancy/use-or-character-of-occupancy.component';
import { IScopeOfWork } from '../../shared/iscope-of-work';
import { IApplicant } from '../i-applicant';
import { ISignatory } from '../I-signatory';

export interface IBuildingPermitScopeOfWork {
  id?: string;
  isSelected: boolean;
  description: string;
  details: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
