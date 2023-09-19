import {
  IForConstructionOwnedModel,
  ILocationOfConstructionModel,
  INatureOfCivilStructureWorksModel,
  IOwnerOrApplicantModel,
} from './igeneral-model';

export class OwnerApplicantModel implements IOwnerOrApplicantModel {
  lastName = '';
  firstName = '';
  middleInitial = '';
  tinNumber = '';
}

export class NatureOfCivilStructureWorksModel implements INatureOfCivilStructureWorksModel {
  staking = false;
  excavation = false;
  soilsStabilization = false;
  pilingWorks = false;
  foundation = false;
  erectionOrLifting = false;
  concreteFraming = false;
  StructuralSteelFraming = false;
  slabs = false;
  walls = false;
  prestressWorks = false;
  materialTesting = false;
  steelTowers = false;
  tanks = false;
  others = false;
  othersSpecify = '';
}

export class LocationOfConstructionModel implements ILocationOfConstructionModel {
  locLotNo = '';
  locBlkNo = '';
  locTCTNo = '';
  locTDNo = '';
  locSt = '';
  locBgy = '';
  locCityMun = '';
  entAddressZipCode = '';
}

export class ForConstructionOwnedModel implements IForConstructionOwnedModel {
  byAnEnterprise = '';
  entFormOfOwnership = '';
  entUseOrCharacterOfOccupancy = '';
  entAddressNo = '';
  entAddressSt = '';
  entAddressBgy = '';
  entAddressCityMun = '';
  entAddressZipCode = '';
  entTelephone = '';
  entContactNo = '';
}
