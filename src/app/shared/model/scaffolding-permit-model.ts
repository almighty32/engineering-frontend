import { IBuildingPermitModel } from './interface/building-permit/I-building-permit';
import { IDemolitionPermitModel } from './interface/idemolition-permit-model';
import { IFencingPermitModel } from './interface/ifencing-permit-model';
import { IScaffoldingPermitModel } from './interface/iscaffolding-permit-model';
import { ISignatory } from './interface/I-signatory';
import { SignaturyModel } from './signatury-model';

export class ScaffoldingPermitModel implements IScaffoldingPermitModel {
  applicationNo = '';
  scaffoldingPermitNo = '';
  id = '';
  building = {} as IBuildingPermitModel;
  buildingId = '';
  isNewConstruction = false;
  isErection = false;
  isAddition = false;
  isAlteration = false;
  isRenovation = false;
  isConversion = false;
  isRepair = false;
  isMoving = false;
  isRaising = false;
  isDemolition = false;
  isAccesoryBuildingOrStructure = false;
  otherScopeOfWork = '';
  designProfessional = new SignaturyModel();
  inspectorOrSupervisor = new SignaturyModel();
  designProfessionalId = '';
  inspectorOrSupervisorId = '';
  lotOwner = '';
}
