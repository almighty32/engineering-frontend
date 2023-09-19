import { Injectable } from '@angular/core';
import { IHvMvPrimaryDisconnectingMeansModel } from '@shared/model/interface/certificates/electical/ihvmv-primary-disconnecting-means-model';
import { DateService } from '@shared/services/date.service';
import { PDFDocument } from 'pdf-lib';

@Injectable({
  providedIn: 'root',
})
export class HVMVPrmariyDisconnectingMeansPrintService {
  fileName = 'coo_hvmv_primary_disconnecting_means';

  constructor(private dateService: DateService) {}

  async print(data: IHvMvPrimaryDisconnectingMeansModel) {
    const element = data;
    try {
      const secondPdfBytes = await fetch(
        `/assets/pdfs/certificates/electrical/${this.fileName}.pdf`
      ).then(res => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(secondPdfBytes);
      pdfDoc.setTitle('Automatic or Manual Transfer Switch');

      //! TODO: put your code below
      const fieldNames = pdfDoc
        .getForm()
        .getFields()
        .map(f => f.getName());

      const form = pdfDoc.getForm();
      const {
        certificateNo,
        fee,
        orNo,
        datePaid,
        dateIssued,
        verifier,
        dateVerified,

        NoOrSizeOfGroundWires,
        NoOrSizeOfIncomingWires,
        fuseOrCBRating,
        continuesAmpsrating,
        contactLifeLeft,
        noOfPoles,
        descOrManuf,
        insulatingMedium,
        voltage,

        electricalPermit,
        buildingOfficial,
        buildingOfficialDateSigned: BODateSigned,
        electricalInspector,
        electricalInspectorDateSigned: EIDateSigned,
        chiefElectricalSection,
        chiefElectricalSectionDateSigned: CESDateSigned,
        chiefInspectionEnforcementDivision,
        chiefInspectionEnforcementDivisionDateSigned: CIEDDateSigned,
        chiefProcessingAndEvaluationDivision,
        chiefProcessingAndEvaluationDivisionDateSigned: CPEDDateSigned,
      } = element;

      form.getTextField('NO').setText(`${certificateNo}`);
      form.getTextField('FEE_PAID').setText(`${fee}`);
      form.getTextField('OR_NO').setText(`${orNo}`);
      form.getTextField('DATE_PAID').setText(`${datePaid}`);

      form.getTextField('VERIFIER').setText(`${verifier.completeName}`);
      form.getTextField('V_PRC_NO').setText(`${verifier.prcNo}`);
      form.getTextField('V_LICENSED_DATE_ISSUED').setText(`${verifier.dateIssued}`);
      form.getTextField('V_LICENSED_VALIDITY').setText(`${verifier.validity}`);

      if (verifier.isProfessionalEE) {
        form.getCheckBox('V_IS_PEE').check();
      }
      if (verifier.isRegisteredME) {
        form.getCheckBox('V_IS_RME').check();
      }
      if (verifier.isRegisteredEE) {
        form.getCheckBox('V_IS_REE').check();
      }

      const _dateIssued = this.dateService.formatDate(dateIssued);
      form.getTextField('DATE_ISSUED').setText(`${_dateIssued}`);
      form.getTextField('BO').setText(`${buildingOfficial.completeName}`);

      const _boDateSigned = this.dateService.formatDate(BODateSigned);
      form.getTextField('BO_DATE_SIGNED').setText(`${_boDateSigned}`);

      form.getTextField('EI').setText(`${electricalInspector.completeName}`);
      const _eiDateSigned = this.dateService.formatDate(EIDateSigned);
      form.getTextField('EI_DATE_SIGNED').setText(`${_eiDateSigned}`);
      form.getTextField('EI_LICENSED_VALIDITY').setText(`${electricalInspector.validity}`);
      form.getTextField('EI_PRC_NO').setText(`${electricalInspector.prcNo}`);

      form.getTextField('CES').setText(`${chiefElectricalSection.completeName}`);
      const _cesDateSigned = this.dateService.formatDate(CESDateSigned);
      form.getTextField('CES_DATE_SIGNED').setText(`${_cesDateSigned}`);
      form.getTextField('CES_PRC_NO').setText(`${chiefElectricalSection.prcNo}`);
      form.getTextField('CES_LICENSED_VALIDITY').setText(`${chiefElectricalSection.validity}`);

      form.getTextField('CPED').setText(`${chiefProcessingAndEvaluationDivision.completeName}`);
      const _cpedDateSigned = this.dateService.formatDate(CPEDDateSigned);
      form.getTextField('CPED_DATE_SIGNED').setText(`${_cpedDateSigned}`);

      form.getTextField('CIED').setText(`${chiefInspectionEnforcementDivision.completeName}`);
      const _ciedDateSigned = this.dateService.formatDate(CIEDDateSigned);
      form.getTextField('CIED_DATE_SIGNED').setText(`${_ciedDateSigned}`);

      form.getTextField('EP_NO').setText(`${electricalPermit.applicationNo}`);
      // form.getTextField('EP_DATE_ISSUED').setText(`${''}`);

      form.getTextField('FUSE_CB_RATING').setText(`${fuseOrCBRating}`);
      form.getTextField('CONTINUES_AMPS_RATING').setText(`${continuesAmpsrating}`);
      form.getTextField('CONTACT_LIFE_LEFT').setText(`${contactLifeLeft}`);
      form.getTextField('NO_OF_POLES').setText(`${noOfPoles}`);
      form.getTextField('DESCRIPTION_OR_MANUF').setText(`${descOrManuf}`);
      form.getTextField('INSULATING_MEDIUM').setText(`${insulatingMedium}`);
      form.getTextField('VOLTAGE').setText(`${voltage}`);
      form.getTextField('NO_OR_SIZE_OF_INCOMING_WIRES').setText(`${NoOrSizeOfIncomingWires}`);
      form.getTextField('NO_OR_SIZE_OF_GROUNDING_WIRES').setText(`${NoOrSizeOfGroundWires}`);

      const _dateVerified = this.dateService.formatDate(dateVerified);
      form.getTextField('VERIFIED_ON').setText(`${_dateVerified}`);
      // form.getTextField('INSPECTION_FEE').setText(`${electricalPermit.date}`);
      // form.getTextField('INSPECTION_OR_NO').setText(`${inpsecti}`);

      const _ownerLesseeAddress = `${electricalPermit.buildingPermit.applicant.addressNo} ${electricalPermit.buildingPermit.applicant.addressStreet} ${electricalPermit.buildingPermit.applicant.addressBarangay} ${electricalPermit.buildingPermit.applicant.addressCity}`;
      form.getTextField('LOCATION').setText(`${_ownerLesseeAddress}`);
      const _ownerLessee = `${electricalPermit.buildingPermit.applicant.firstName} ${electricalPermit.buildingPermit.applicant.middleInitial} ${electricalPermit.buildingPermit.applicant.lastName}`;
      form.getTextField('NAME_OF_OWNER_OR_LESSEE').setText(`${_ownerLessee}`);

      const pdfBytes = await pdfDoc.save();
      const file = new Blob([pdfBytes], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    } catch (err) {
      console.log(err);
    }
  }
}
