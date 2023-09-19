import { IBuildingPermitModel } from './interface/building-permit/I-building-permit';
import { IDemolitionPermitModel } from './interface/idemolition-permit-model';
import { IExcavationGroundPrepModel } from './interface/iexcavation-ground-prep-permit-model';
import { IFencingPermitModel } from './interface/ifencing-permit-model';
import { ISignatory } from './interface/I-signatory';
import { SignaturyModel } from './signatury-model';

export class ExcavationGroundPrepModel implements IExcavationGroundPrepModel {
  id = '';
  applicationNo = '';
  egppNo = '';
  building = {} as IBuildingPermitModel;
  buildingId = '';
  isNewConstruction = false;
  isErection = false;
  isAddition = false;
  isRenovation = false;
  isRepair = false;
  otherScopeOfWork = '';

  isCharOccupancygroupA = false;
  isCharOccupancygroupB = false;
  isCharOccupancygroupC = false;
  isCharOccupancygroupD = false;
  isCharOccupancygroupE = false;
  isCharOccupancygroupF = false;
  isCharOccupancygroupG = false;
  isCharOccupancygroupH = false;
  isCharOccupancygroupI = false;
  isCharOccupancygroupJ = false;

  designProfessional = new SignaturyModel();
  inspectorOrSupervisor = new SignaturyModel();
  designProfessionalId = '';
  inspectorOrSupervisorId = '';

  lotOwner = '';
}
