import { formatDate } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { IElectricalInspectionModel } from '@shared/model/interface/certificates/electical/ielectrical-inspection-model';
import { IIllegalElectricalInstallationModel } from '@shared/model/interface/certificates/electical/iillegal-electrical-installation-model';
import { IMotorControlCenterModel } from '@shared/model/interface/certificates/electical/imotor-control-center-model';
import { IUnsafeElectricalInstallationModel } from '@shared/model/interface/certificates/electical/iunsafe-electrical-installation-model';
import { IElectricalPermit } from '@shared/model/interface/electrical-permit/i-electrical-permit-model';
import { ITemporaryServiceConnectionModel } from '@shared/model/interface/itemporary-service-connection-model';
import { DateService } from '@shared/services/date.service';
import { PDFDocument } from 'pdf-lib';

@Injectable({
  providedIn: 'root',
})
export class MotorControlCenterPrintService {
  fileName = 'coo_motor_control_centers';
  constructor(private dateService: DateService) {}

  async print(data: IMotorControlCenterModel) {
    // TODO uncomment this a whole
    // const element = data;
    // try {
    //   const secondPdfBytes = await fetch(
    //     `/assets/pdfs/certificates/electrical/${this.fileName}.pdf`
    //   ).then(res => res.arrayBuffer());
    //   const pdfDoc = await PDFDocument.load(secondPdfBytes);
    //   pdfDoc.setTitle('Incoming Low Voltage Switch Gear');
    //   //! TODO: put your code below
    //   const fieldNames = pdfDoc
    //     .getForm()
    //     .getFields()
    //     .map(f => f.getName());
    //   console.log({ fieldNames });
    //   const form = pdfDoc.getForm();
    //   // form.getTextField('address no').setText(`${addressNo}`);
    //   const {
    //     dateIssued,
    //     electricalPermitId,
    //     electricalPermit,
    //     verifier,
    //     verifierId,
    //     mainCBAmpsRating,
    //     poles,
    //     descOrManuf,
    //     noOfCombiCBOrMS,
    //     typeOfStarters,
    //     noOfCBOnly,
    //     withPLCS,
    //     withVFDS,
    //     voltage,
    //     typesOfEnclosure,
    //     noOfFeedersBreakers,
    //     noAndSizeOfIncomingCablePerPhase,
    //     noAndSizeOfGroundingWire,
    //     dateVerified,
    //     dateExpires,
    //     buildingOfficial,
    //     buildingOfficialDateSigned: BODateSigned,
    //     chiefElectricalSection,
    //     chiefElectricalSectionDateSigned: CESDateSigned,
    //     electricalInspector,
    //     electricalInspectorDateSigned: EIDateSigned,
    //     chiefInspectionEnforcementDivision,
    //     chiefInspectionEnforcementDivisionDateSigned: CIEDDateSigned,
    //     chiefProcessingAndEvaluationDivision,
    //     chiefProcessingAndEvaluationDivisionDateSigned: CPEDDateSigned,
    //     certificateNo,
    //     fee,
    //     orNo,
    //     datePaid,
    //   } = element;
    //   form.getTextField('NO').setText(`${certificateNo}`);
    //   form.getTextField('FEE_PAID').setText(`${fee}`);
    //   form.getTextField('OR_NO').setText(`${orNo}`);
    //   const _datePaid = this.dateService.formatDate(datePaid);
    //   form.getTextField('DATE_PAID').setText(`${_datePaid}`);
    //   const _dateIssued = this.dateService.formatDate(dateIssued);
    //   form.getTextField('DATE_ISSUED').setText(`${_dateIssued}`);
    //   form.getTextField('VERIFIER').setText(`${verifier.completeName}`);
    //   form.getTextField('V_PRC_NO').setText(`${verifier.prcNo}`);
    //   form.getTextField('V_LICENSED_VALIDITY').setText(`${verifier.validity}`);
    //   const _vDateIssued = this.dateService.formatDate(verifier.dateIssued);
    //   form.getTextField('V_LICENSED_DATE_ISSUED').setText(`${_vDateIssued}`);
    //   if (verifier.isProfessionalEE) {
    //     form.getCheckBox('V_IS_PEE').check();
    //   }
    //   if (verifier.isRegisteredME) {
    //     form.getCheckBox('V_IS_RME').check();
    //   }
    //   if (verifier.isRegisteredEE) {
    //     form.getCheckBox('V_IS_REE').check();
    //   }
    //   form.getTextField('NO_CB_ONLY').setText(`${noOfCBOnly}`);
    //   form.getTextField('NO_OF_CB_ONLY').setText(`${noOfCBOnly}`);
    //   form.getTextField('WITH_VFDS').setText(`${withVFDS}`);
    //   form.getTextField('VOLTAGE').setText(`${voltage}`);
    //   form.getTextField('TYPE_OF_ENCLOSURE').setText(`${typesOfEnclosure.toUpperCase()}`);
    //   form.getTextField('NO_FEEDERS_BREAKERS').setText(`${noOfFeedersBreakers}`);
    //   form
    //     .getTextField('NO_AND_SIZE_OF_INCOMING_CABLE_PER_PHASE')
    //     .setText(`${noAndSizeOfIncomingCablePerPhase}`);
    //   form
    //     .getTextField('NO_AND_SIZE_OF_INCOMING_CABLER_PER_PHASE')
    //     .setText(`${noAndSizeOfIncomingCablePerPhase}`);
    //   form.getTextField('MAIN_CB_AMPS').setText(`${mainCBAmpsRating}`);
    //   form.getTextField('POLES').setText(`${poles}`);
    //   form.getTextField('DESCRIPTION_OR_MANUFACTURER').setText(`${descOrManuf.toUpperCase()}`);
    //   form.getTextField('NO_OF_COMBINATION_OF_CBMS').setText(`${noOfCombiCBOrMS}`);
    //   form.getTextField('WITH_PLCS').setText(`${withPLCS}`);
    //   form.getTextField('TYPE_OF_STARTERS').setText(`${typeOfStarters.toUpperCase()}`);
    //   form.getTextField('TYPES_OF_ENCLOSURE').setText(`${typesOfEnclosure.toUpperCase()}`);
    //   form.getTextField('NO_AND_SIZE_OF_GROUNDING_WIRES').setText(`${noAndSizeOfGroundingWire}`);
    //   form.getTextField('VERIFIED_ON').setText(`${dateVerified}`);
    //   form.getTextField('EXPIRES_ON').setText(`${dateExpires}`);
    //   // form.getTextField('INSPECTION_FEE_PAID').setText(`${}`);
    //   // form.getTextField('INSPECTION_OR_NO').setText(`${}`);
    //   // form.getTextField('INSPECTION_FEE_DATE_PAID').setText(`${}`);
    //   form.getTextField('BO').setText(`${buildingOfficial.completeName.toUpperCase()}`);
    //   const _boDateSigned = this.dateService.formatDate(BODateSigned);
    //   form.getTextField('BO_DATE_SIGNED').setText(`${_boDateSigned}`);
    //   form.getTextField('EI').setText(`${electricalInspector.completeName.toUpperCase()}`);
    //   const _eiDateSigned = this.dateService.formatDate(EIDateSigned);
    //   form.getTextField('EI_DATE_SIGNED').setText(`${_eiDateSigned}`);
    //   form.getTextField('EI_LICENSED_VALIDITY').setText(`${electricalInspector.validity}`);
    //   form.getTextField('EI_PRC_NO').setText(`${electricalInspector.prcNo}`);
    //   form.getTextField('CES').setText(`${chiefElectricalSection.completeName.toUpperCase()}`);
    //   const _cesDateSigned = this.dateService.formatDate(CESDateSigned);
    //   form.getTextField('CES_DATE_SIGNED').setText(`${_cesDateSigned}`);
    //   form.getTextField('CES_PRC_NO').setText(`${chiefElectricalSection.prcNo}`);
    //   form.getTextField('CES_LICENSED_VALIDITY').setText(`${chiefElectricalSection.validity}`);
    //   form
    //     .getTextField('CPED')
    //     .setText(`${chiefProcessingAndEvaluationDivision.completeName.toUpperCase()}`);
    //   const _cpedDateSigned = this.dateService.formatDate(CPEDDateSigned);
    //   form.getTextField('CPED_DATE_SIGNED').setText(`${_cpedDateSigned}`);
    //   form
    //     .getTextField('CIED')
    //     .setText(`${chiefInspectionEnforcementDivision.completeName.toUpperCase()}`);
    //   const _ciedDateSigned = this.dateService.formatDate(CIEDDateSigned);
    //   form.getTextField('CIED_DATE_SIGNED').setText(`${_ciedDateSigned}`);
    //   form.getTextField('EP_NO').setText(`${electricalPermit.applicationNo}`);
    //   // form.getTextField('EP_DATE_ISSUED').setText(`${''}`);
    //   const _ownerLesseeAddress = `${electricalPermit.buildingPermit.applicant.addressNo} ${electricalPermit.buildingPermit.applicant.addressStreet} ${electricalPermit.buildingPermit.applicant.addressBarangay} ${electricalPermit.buildingPermit.applicant.addressCity}`;
    //   form.getTextField('LOCATION').setText(`${_ownerLesseeAddress.toUpperCase()}`);
    //   const _ownerLessee = `${electricalPermit.buildingPermit.applicant.firstName} ${electricalPermit.buildingPermit.applicant.middleInitial} ${electricalPermit.buildingPermit.applicant.lastName}`;
    //   form.getTextField('NAME_OF_OWNER_OR_LESSEE').setText(`${_ownerLessee.toUpperCase()}`);
    //   form.getTextField('NAME_OF_OWNER_LESSEE').setText(`${_ownerLessee.toUpperCase()}`);
    //   const pdfBytes = await pdfDoc.save();
    //   const file = new Blob([pdfBytes], { type: 'application/pdf' });
    //   const fileURL = URL.createObjectURL(file);
    //   window.open(fileURL);
    // } catch (err) {
    //   console.log(err);
    // }
  }
}
