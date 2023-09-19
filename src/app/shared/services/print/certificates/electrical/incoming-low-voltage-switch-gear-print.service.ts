import { formatDate } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { IElectricalInspectionModel } from '@shared/model/interface/certificates/electical/ielectrical-inspection-model';
import { IIllegalElectricalInstallationModel } from '@shared/model/interface/certificates/electical/iillegal-electrical-installation-model';
import { IIncomingLowVoltageSwitchgearModel } from '@shared/model/interface/certificates/electical/iincoming-low-voltage-switchgear-model';
import { IUnsafeElectricalInstallationModel } from '@shared/model/interface/certificates/electical/iunsafe-electrical-installation-model';
import { IElectricalPermit } from '@shared/model/interface/electrical-permit/i-electrical-permit-model';
import { ITemporaryServiceConnectionModel } from '@shared/model/interface/itemporary-service-connection-model';
import { DateService } from '@shared/services/date.service';
import { PDFDocument } from 'pdf-lib';

@Injectable({
  providedIn: 'root',
})
export class IncomingLowVoltageSwitchGearPrintService {
  fileName = 'coo_incoming_low_voltage_switchgear';
  constructor(private dateService: DateService) {}

  async print(data: IIncomingLowVoltageSwitchgearModel) {
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
        fee,
        certificateNo,
        orNo,
        datePaid,
        dateIssued,

        buildingOfficial,
        buildingOfficialDateSigned: BODateSigned,

        NoOfFeederBreakers,
        NoAndSizeOfGroundWire,
        NoAndSizeOfIncomingCablePerPhase,
        mechanicalOperation,
        typeOfEnclosure,
        voltage,
        descOrManuf,
        poles,
        mainCBAmps,

        dateExpires,
        dateVerified,

        chiefProcessingAndEvaluationDivision,
        chiefProcessingAndEvaluationDivisionDateSigned: CPEDDateSigned,
        chiefInspectionEnforcementDivision,
        chiefInspectionEnforcementDivisionDateSigned: CIEDDateSigned,
        electricalInspector,
        electricalInspectorDateSigned: EIDateSigned,
        chiefElectricalSection,
        chiefElectricalSectionDateSigned: CESDateSigned,

        verifier,

        electricalPermit,
      } = element;

      form.getTextField('NO').setText(`${certificateNo}`);
      form.getTextField('FEE_PAID').setText(`${fee}`);
      form.getTextField('OR_NO').setText(`${orNo}`);
      const _datePaid = this.dateService.formatDate(datePaid);
      form.getTextField('DATE_PAID').setText(`${_datePaid}`);

      const _dateIssued = this.dateService.formatDate(dateIssued);
      form.getTextField('DATE_ISSUED').setText(`${_dateIssued}`);

      form.getTextField('BO').setText(`${buildingOfficial.completeName.toUpperCase()}`);
      const _boDateSigned = this.dateService.formatDate(BODateSigned);
      form.getTextField('BO_DATE_SIGNED').setText(`${_boDateSigned}`);

      form
        .getTextField('CPED')
        .setText(`${chiefProcessingAndEvaluationDivision?.completeName ?? ''}`);
      const _cpedDateSigned = this.dateService.formatDate(CPEDDateSigned);
      form.getTextField('CPED_DATE_SIGNED').setText(`${_cpedDateSigned}`);

      form
        .getTextField('CIED')
        .setText(`${chiefInspectionEnforcementDivision?.completeName ?? 'Not Provided'}`);
      const _ciedDateSigned = this.dateService.formatDate(CIEDDateSigned);
      form.getTextField('CIED_DATE_SIGNED').setText(`${_ciedDateSigned}`);

      form.getTextField('EI').setText(`${electricalInspector.completeName}`);
      const _eiDateSigned = this.dateService.formatDate(EIDateSigned);
      form.getTextField('EI_DATE_SIGNED').setText(`${_eiDateSigned}`);
      form.getTextField('EI_PRC_NO').setText(`${electricalInspector.prcNo}`);
      form.getTextField('EI_LICENSED_VALIDITY').setText(`${electricalInspector.validity}`);

      form.getTextField('CES').setText(`${chiefElectricalSection.completeName}`);
      const _cesDateSigned = this.dateService.formatDate(CESDateSigned);
      form.getTextField('CES_DATE_SIGNED').setText(`${_cesDateSigned}`);
      form.getTextField('CES_PRC_NO').setText(`${chiefElectricalSection.prcNo}`);
      form.getTextField('CES_LICENSED_VALIDITY').setText(`${chiefElectricalSection.validity}`);

      form.getTextField('FEEDER_BREAKERS').setText(`${NoOfFeederBreakers}`);
      form.getTextField('NO_AND_SIZE_OF_GROUNDING_WIRES').setText(`${NoAndSizeOfGroundWire}`);
      form.getTextField('NO_AND_SIZE_OF_GROUND_WIRES').setText(`${NoAndSizeOfGroundWire}`);
      form
        .getTextField('NO_AND_SIZE_OF_INCOMING_CABLES_PER_PHASE')
        .setText(`${NoAndSizeOfIncomingCablePerPhase}`);
      form.getTextField('MECHANICAL_OPERATION').setText(`${mechanicalOperation}`);
      form.getTextField('NO_OF_FEEDER_BREAKERS').setText(`${NoOfFeederBreakers}`);
      form.getTextField('TYPE_OF_ENCLOSURE').setText(`${typeOfEnclosure}`);
      form.getTextField('VOLTAGE').setText(`${voltage}`);
      form.getTextField('DESCRIPTION_OR_MANUFACTURER').setText(`${descOrManuf}`);
      form.getTextField('POLES').setText(`${poles}`);
      form.getTextField('MAIN_CB_AMPS').setText(`${mainCBAmps}`);
      const _dateVerified = this.dateService.formatDate(dateVerified);
      form.getTextField('VERIFIED_ON').setText(`${_dateVerified}`);
      form.getTextField('EXPIRATION_DATE').setText(`${dateExpires}`);
      // form.getTextField('INSPECTION_FEE_PAID').setText(`${NoAndSizeOfGroundWire}`);
      // form.getTextField('INSPECTION_OR_NO').setText(`${NoAndSizeOfGroundWire}`);
      // form.getTextField('INSPECTION_FEE_DATE_ISSUED').setText(`${NoAndSizeOfGroundWire}`);

      form.getTextField('VERIFIER').setText(`${verifier.completeName}`);
      form.getTextField('V_PRC_NO').setText(`${verifier.prcNo}`);
      form.getTextField('V_LICENSED_DATE_ISSUED').setText(`${verifier.dateIssued}`);
      form.getTextField('V_LICENSED_VALIDITY').setText(`${verifier.validity}`);

      if (verifier.isProfessionalEE) {
        form.getCheckBox('V_IS_RME').check();
      }
      if (verifier.isRegisteredEE) {
        form.getCheckBox('V_IS_REE').check();
      }
      if (verifier.isRegisteredME) {
        form.getCheckBox('V_IS_RME').check();
      }

      form.getTextField('EP_NO').setText(`${electricalPermit.applicationNo}`);
      // form.getTextField('EP_ISSUED_DATE').setText(`${electricalPermit.applicationNo}`);

      const _ownerLesseeAddress = `${electricalPermit.buildingPermit.applicant.addressNo} ${electricalPermit.buildingPermit.applicant.addressStreet} ${electricalPermit.buildingPermit.applicant.addressBarangay} ${electricalPermit.buildingPermit.applicant.addressCity}`;
      form.getTextField('LOCATION').setText(`${_ownerLesseeAddress}`);
      const _ownerLessee = `${electricalPermit.buildingPermit.applicant.firstName} ${electricalPermit.buildingPermit.applicant.middleInitial} ${electricalPermit.buildingPermit.applicant.lastName}`;
      form.getTextField('NAME_OF_OWNER_LESSEE').setText(`${_ownerLessee}`);

      ['A certificate was submitted by', 'CityMunicipality of', 'Province of'];

      const pdfBytes = await pdfDoc.save();
      const file = new Blob([pdfBytes], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    } catch (err) {
      console.log(err);
    }
  }
}
