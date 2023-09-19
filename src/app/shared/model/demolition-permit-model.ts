import { IBuildingPermitModel } from './interface/building-permit/I-building-permit';
import { IDemolitionPermitModel } from './interface/idemolition-permit-model';
import { IFencingPermitModel } from './interface/ifencing-permit-model';
import { ISignatory } from './interface/I-signatory';
import { SignaturyModel } from './signatury-model';

export class DemolitionPermitModel implements IDemolitionPermitModel {
  inspectorOrSupervisorId = '';
  id = '';
  demolitionPermitId = '';
  applicationNo = '';

  building = {} as IBuildingPermitModel;
  buildingId = '';
  isDemolition = false;
  otherScopeOfWork = '';
  inspectorOrSupervisor = new SignaturyModel();
  lotOwner = '';
}
