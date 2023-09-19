import { IBuildingPermitModel } from './interface/building-permit/I-building-permit';
import { IDemolitionPermitModel } from './interface/idemolition-permit-model';
import { IFencingPermitModel } from './interface/ifencing-permit-model';
import { IScaffoldingPermitModel } from './interface/iscaffolding-permit-model';
import { ISidewalkConstructionPermitModel } from './interface/isidewalk-construction-permit-model';
import { ISignatory } from './interface/I-signatory';
import { SignaturyModel } from './signatury-model';

export class SidewalkConsturctionPermitModel implements ISidewalkConstructionPermitModel {
  applicationNo = '';
  sidewalkPermitNo = '';
  id = '';
  building = {} as IBuildingPermitModel;
  buildingId = '';
  isNewConstruction = false;
  isErection = false;
  isAddition = false;
  isRenovation = false;
  isRepair = false;

  otherScopeOfWork = '';
  designProfessional = new SignaturyModel();
  inspectorOrSupervisor = new SignaturyModel();
  designProfessionalId = '';
  inspectorOrSupervisorId = '';
  lotOwner = '';
}
