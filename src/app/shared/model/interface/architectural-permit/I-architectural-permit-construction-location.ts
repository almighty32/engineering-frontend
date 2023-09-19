import { ICharacterOfOccupancy } from 'app/routes/building/create-building-permit/use-or-character-of-occupancy/use-or-character-of-occupancy.component';

export interface IArchitecturalConstructionLocation {
  id?: string;
  lotNo: string;
  blockNo: string;
  tctNo: string;
  taxDecNo: string;
  street: string;
  barangay: string;
  cityMun: string;

  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
