import { ISignatory } from '../../I-signatory';
import { IElectricalPermit } from '../../electrical-permit/i-electrical-permit-model';

export interface IIndoorOutdoorStationTransformerModel {
  id: string;
  dateIssued: Date;

  electricalPermitId: string;
  electricalPermit: IElectricalPermit;

  verifier: ISignatory;
  verifierId: string;

  verifiedKVA: string;
  verifiedDescOrManuf: string;
  verifiedPrimaryVoltage: string;
  verifiedPhase: string;
  verifiedTypeOfInsulatingFluid: string;
  verifiedInsulationPowerFactorTest: string;
  verifiedWattsLoss: string;
  verifiedLeakageReactanceTest: string;
  verifiedExcitingCurrentTest: string;
  verifiedTransformerTurnsRatio: string;

  dateVerified: Date;
  dateExpires: Date;

  electricalInspectorId: string;
  electricalInspector: ISignatory;
  electricalInspectorDateSigned: Date;

  chiefElectricalSectionId: string;
  chiefElectricalSection: ISignatory;
  chiefElectricalSectionDateSigned: Date;

  chiefInspectionEnforcementDivisionId: string;
  chiefInspectionEnforcementDivision: ISignatory;
  chiefInspectionEnforcementDivisionDateSigned: Date;

  chiefProcessingAndEvaluationDivisionId: string;
  chiefProcessingAndEvaluationDivision: ISignatory;
  chiefProcessingAndEvaluationDivisionDateSigned: Date;

  buildingOfficialId: string;
  buildingOfficial: ISignatory;
  buildingOfficialDateSigned: Date;

  certificateNo: string;
  fee: number;
  orNo: string;
  datePaid: Date;
}
