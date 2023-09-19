import { IBuildingPermitModel } from './building-permit/I-building-permit';
import { ISignatory } from './I-signatory';

export interface IDemolitionPermitModel {
  id: string;
  demolitionPermitId: string;
  applicationNo: string;

  building: IBuildingPermitModel;
  buildingId: string;

  isDemolition: boolean;
  otherScopeOfWork: string;

  inspectorOrSupervisor: ISignatory;
  inspectorOrSupervisorId: string;
  lotOwner: string;
}
