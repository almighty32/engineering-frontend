export interface IPlumbingPermitFixture {
  id?: string;
  qty: number;
  kindStatus: string;
  kind: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
export interface IPlumbingPermitFixtureSystem {
  id?: string;
  
  description: string;
  isSelected: boolean;
  details: string;
}
