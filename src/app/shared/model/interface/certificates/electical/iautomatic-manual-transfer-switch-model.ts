import { IElectricalPermit } from '../../electrical-permit/i-electrical-permit-model';
import { ISignatory } from '../../I-signatory';

export interface IAutomaticManualTransferSwitchModel {
  id: string;
  dateIssued: Date;

  electricalPermitId: string;
  electricalPermit: IElectricalPermit;

  verifier: ISignatory;
  verifierId: string;

  ampsOfCB: number;
  poles: number;
  descOrManuf: string;
  typesOfEnclosure: string;
  voltage: number;
  withPlantExerciser: string;
  transferringOperation: string;
  standbyBatteries: string;
  trickleCharger: string;
  noAndSizeOfIncomingWirePerPhase: number;
  noAndSizeOfGroundingWires: number;
  kindOfOperation: string;
  dateVerified: Date;
  dateExpires: Date;
  inspectionFee: number;
  inspectionORNo: string;
  inspectionORDateIssued: Date;

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
