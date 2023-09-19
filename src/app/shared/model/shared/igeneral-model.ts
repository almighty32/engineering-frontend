export interface IOwnerOrApplicantModel {
  lastName: string;
  firstName: string;
  middleInitial: string;
  tinNumber: string;
}

export interface IForConstructionOwnedModel {
  byAnEnterprise: string;
  entFormOfOwnership: string;
  entUseOrCharacterOfOccupancy: string;
  entAddressNo: string;
  entAddressSt: string;
  entAddressBgy: string;
  entAddressCityMun: string;
  entAddressZipCode: string;
  entTelephone: string;
  entContactNo: string;
}

export interface ILocationOfConstructionModel {
  locLotNo: string;
  locBlkNo: string;
  locTCTNo: string;
  locTDNo: string;
  locSt: string;
  locBgy: string;
  locCityMun: string;
  entAddressZipCode: string;
}

export interface INatureOfCivilStructureWorksModel {
  staking: boolean;
  excavation: boolean;
  soilsStabilization: boolean;
  pilingWorks: boolean;
  foundation: boolean;
  erectionOrLifting: boolean;
  concreteFraming: boolean;
  StructuralSteelFraming: boolean;
  slabs: boolean;
  walls: boolean;
  prestressWorks: boolean;
  materialTesting: boolean;
  steelTowers: boolean;
  tanks: boolean;
  others: boolean;
  othersSpecify: string;
}
