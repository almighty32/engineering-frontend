import { Injectable } from '@angular/core';
import { ILightingDistributionPanelModel } from '@shared/model/interface/certificates/electical/ilighting-distribution-panel-model';
import { DateService } from '@shared/services/date.service';
import { PDFDocument } from 'pdf-lib';

@Injectable({
  providedIn: 'root',
})
export class LightingDistributionPanelPrintService {
  fileName = 'coo_lighting_distribution_panels';
  constructor(private dateService: DateService) {}

  async print(data: ILightingDistributionPanelModel) {
    const element = data;
    try {
      const secondPdfBytes = await fetch(
        `/assets/pdfs/certificates/electrical/${this.fileName}.pdf`
      ).then(res => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(secondPdfBytes);
      pdfDoc.setTitle('Incoming Low Voltage Switch Gear');

      //! TODO: put your code below
      const fieldNames = pdfDoc
        .getForm()
        .getFields()
        .map(f => f.getName());
      console.log({ fieldNames });
      const form = pdfDoc.getForm();
      // form.getTextField('address no').setText(`${addressNo}`);

      const {
        certificateNo,
        orNo,
        fee,
        datePaid,
        dateIssued,
        voltage,
        typesOfEnclosure,
        descOrManuf,
        mainCBAmpsRating,
        poles,
        noOfBranchBreakers,
        noAndSizeOfIncomingWirePerPhase,
        noAndSizeOfGroundingWire,
        dateVerified,
        dateExpires,
        electricalPermit,
        verifier,

        buildingOfficial,
        buildingOfficialDateSigned: BODateSigned,

        chiefElectricalSection,
        chiefElectricalSectionDateSigned: CESDateSigned,

        electricalInspector,
        electricalInspectorDateSigned: EIDateSigned,

        chiefInspectionEnforcementDivision,
        chiefInspectionEnforcementDivisionDateSigned: CIEDDateSigned,

        chiefProcessingAndEvaluationDivision,
        chiefProcessingAndEvaluationDivisionDateSigned: CPEDDateSigned,
      } = element;

      form.getTextField('NO').setText(`${certificateNo}`);
      form.getTextField('FEE_PAID').setText(`${fee}`);
      form.getTextField('OR_NO').setText(`${orNo}`);
      const _datePaid = this.dateService.formatDate(datePaid);
      form.getTextField('DATE_PAID').setText(`${_datePaid}`);

      const _dateIssued = this.dateService.formatDate(dateIssued);
      form.getTextField('DATE_ISSUED').setText(`${_dateIssued}`);

      form.getTextField('VERIFIER').setText(`${verifier.completeName.toUpperCase()}`);
      form.getTextField('V_PRC_NO').setText(`${verifier.prcNo}`);
      form.getTextField('V_LICENSED_VALIDITY').setText(`${verifier.validity}`);
      const _vDateIssued = this.dateService.formatDate(verifier.dateIssued);
      form.getTextField('V_LICENSED_ISSUED_DATE').setText(`${_vDateIssued}`);

      if (verifier.isProfessionalEE) {
        form.getCheckBox('V_IS_PEE').check();
      }
      if (verifier.isRegisteredME) {
        form.getCheckBox('V_IS_RME').check();
      }
      if (verifier.isRegisteredEE) {
        form.getCheckBox('V_IS_REE').check();
      }

      form.getTextField('TYPES_OF_ENCLOSURE').setText(`${typesOfEnclosure.toUpperCase()}`);
      form.getTextField('DESCRIPTION_OR_MANUFACTURER').setText(`${descOrManuf.toUpperCase()}`);
      form.getTextField('NO_AND_SIZE_OF_GROUND_WIRE').setText(`${noAndSizeOfGroundingWire}`);
      form
        .getTextField('NO_AND_SIZE_OF_INCOMING_CABLES_PER_PHASE')
        .setText(`${noAndSizeOfIncomingWirePerPhase}`);
      form.getTextField('NO_OF_BRANCH_BREAKERS').setText(`${noOfBranchBreakers}`);
      form.getTextField('MAIN_CB_AMPS_RATING').setText(`${mainCBAmpsRating}`);
      form.getTextField('POLES').setText(`${poles}`);
      form.getTextField('VOLTAGE').setText(`${voltage}`);
      const _dateVerified = this.dateService.formatDate(dateVerified);
      form.getTextField('VERIFIED_ON').setText(`${_dateVerified}`);
      const _dateExpires = this.dateService.formatDate(dateExpires);
      form.getTextField('EXPIRES_ON').setText(`${_dateExpires}`);

      // form.getTextField('INSPECTION_FEE').setText(`${dateExpires}`);
      // form.getTextField('INSPECTION_OR_NO').setText(`${dateExpires}`);
      // form.getTextField('INSPECTION_FEE_DATE_PAID').setText(`${dateExpires}`);

      form.getTextField('BO').setText(`${buildingOfficial.completeName.toUpperCase()}`);
      const _boDateSigned = this.dateService.formatDate(BODateSigned);
      form.getTextField('BO_DATE_SIGNED').setText(`${_boDateSigned}`);

      form.getTextField('EI').setText(`${electricalInspector.completeName.toUpperCase()}`);
      const _eiDateSigned = this.dateService.formatDate(EIDateSigned);
      form.getTextField('EI_DATE_SIGNED').setText(`${_eiDateSigned}`);
      form.getTextField('EI_LICENSED_VALIDITY').setText(`${electricalInspector.validity}`);
      form.getTextField('EI_PRC_NO').setText(`${electricalInspector.prcNo}`);

      form.getTextField('CES').setText(`${chiefElectricalSection.completeName.toUpperCase()}`);
      const _cesDateSigned = this.dateService.formatDate(CESDateSigned);
      form.getTextField('CES_DATE_SIGNED').setText(`${_cesDateSigned}`);
      form.getTextField('CES_PRC_NO').setText(`${chiefElectricalSection.prcNo}`);
      form.getTextField('CES_LICENSED_VALIDITY').setText(`${chiefElectricalSection.validity}`);

      form
        .getTextField('CPED')
        .setText(`${chiefProcessingAndEvaluationDivision.completeName.toUpperCase()}`);
      const _cpedDateSigned = this.dateService.formatDate(CPEDDateSigned);
      form.getTextField('CPED_DATE_SIGNED').setText(`${_cpedDateSigned}`);

      form
        .getTextField('CIED')
        .setText(`${chiefInspectionEnforcementDivision.completeName.toUpperCase()}`);
      const _ciedDateSigned = this.dateService.formatDate(CIEDDateSigned);
      form.getTextField('CIED_DATE_SIGNED').setText(`${_ciedDateSigned}`);

      form.getTextField('EP_NO').setText(`${electricalPermit.applicationNo}`);
      // form.getTextField('EP_DATE_ISSUED').setText(`${''}`);

      const _ownerLesseeAddress = `
      ${electricalPermit.buildingPermit.applicant.addressNo} 
      ${electricalPermit.buildingPermit.applicant.addressStreet} 
      ${electricalPermit.buildingPermit.applicant.addressBarangay} 
      ${electricalPermit.buildingPermit.applicant.addressCity}`;

      form.getTextField('LOCATION').setText(`${_ownerLesseeAddress.toUpperCase()}`);
      const _ownerLessee = `${electricalPermit.buildingPermit.applicant.firstName} ${electricalPermit.buildingPermit.applicant.middleInitial} ${electricalPermit.buildingPermit.applicant.lastName}`;
      form.getTextField('NAME_OF_OWNER_OR_LESSEE').setText(`${_ownerLessee.toUpperCase()}`);

      const pdfBytes = await pdfDoc.save();
      const file = new Blob([pdfBytes], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    } catch (err) {
      console.log(err);
    }
  }
}
