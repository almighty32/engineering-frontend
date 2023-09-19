import { formatDate } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { IIllegalElectricalInstallationModel } from '@shared/model/interface/certificates/electical/iillegal-electrical-installation-model';
import { IIndoorOutdoorStationTransformerModel } from '@shared/model/interface/certificates/electical/iindoor-outdoor-station-transformer-model';
import { DateService } from '@shared/services/date.service';
import { FORMERR } from 'dns';
import { PDFDocument } from 'pdf-lib';

@Injectable({
  providedIn: 'root',
})
export class IndoorOutdoorStationTransformerPrintService {
  fileName = 'coo_indoor_outdoor_station_transformer';
  constructor(private dateService: DateService) {}

  async print(data: IIndoorOutdoorStationTransformerModel) {
    const element = data;
    try {
      const secondPdfBytes = await fetch(
        `/assets/pdfs/certificates/electrical/${this.fileName}.pdf`
      ).then(res => res.arrayBuffer());

      const pdfDoc = await PDFDocument.load(secondPdfBytes);
      pdfDoc.setTitle('COO - Indoor or Outdoor Station Transformer');
      // Modify doc, fill out the form...
      const fieldNames = pdfDoc
        .getForm()
        .getFields()
        .map(f => f.getName());
      console.log({ fieldNames });

      const form = pdfDoc.getForm();

      const {
        certificateNo,
        dateIssued,
        electricalInspector,
        electricalInspectorDateSigned,
        chiefElectricalSection,
        chiefElectricalSectionDateSigned,
        chiefInspectionEnforcementDivision,
        chiefInspectionEnforcementDivisionDateSigned,
        chiefProcessingAndEvaluationDivision,
        chiefProcessingAndEvaluationDivisionDateSigned,
        buildingOfficial,
        buildingOfficialDateSigned,
        verifier,
        orNo,
        datePaid,

        verifiedDescOrManuf,
        verifiedExcitingCurrentTest,
        verifiedInsulationPowerFactorTest,
        verifiedKVA,
        verifiedLeakageReactanceTest,
        verifiedPhase,
        verifiedPrimaryVoltage,
        verifiedTransformerTurnsRatio,
        verifiedTypeOfInsulatingFluid,
        verifiedWattsLoss,
        dateVerified,
        dateExpires,

        electricalPermit,
      } = element;

      const _electricalInspectorDateSigned = this.dateService.formatDate(
        electricalInspectorDateSigned
      );
      const _chiefElectricalSectionDateSigned = this.dateService.formatDate(
        chiefElectricalSectionDateSigned
      );
      const _chiefInspectionEnforcementDivisionDateSigned = this.dateService.formatDate(
        chiefInspectionEnforcementDivisionDateSigned
      );
      const _buildingOfficialDateSigned = this.dateService.formatDate(buildingOfficialDateSigned);
      const _dateIssued = this.dateService.formatDate(dateIssued);
      const _datePaid = this.dateService.formatDate(datePaid);

      // !header
      form.getTextField('CERT_NO').setText(`${certificateNo}`);
      form.getTextField('FEE_PAID').setText(`${certificateNo}`);
      form.getTextField('OR_NO').setText(`${certificateNo}`);
      form.getTextField('DATE_PAID').setText(`${_datePaid}`);
      form.getTextField('DATE_ISSUED').setText(`${_dateIssued}`);
      form.getTextField('Operation').setText(`${'Indoor/Outdoor Station Transformer'}`);

      form.getTextField('BO').setText(`${buildingOfficial.completeName}`);
      form.getTextField('bo_date_signed').setText(`${_buildingOfficialDateSigned}`);

      form.getTextField('verifier').setText(`${verifier.completeName}`);
      form.getTextField('v_prc_no').setText(`${verifier.prcNo}`);
      form.getTextField('v_prc_license_issued_date').setText(`${verifier.dateIssued}`);
      form.getTextField('v_licensed_validity').setText(`${verifier.validity}`);
      if (verifier.isProfessionalEE) {
        form.getCheckBox('V_IS_PEE').check();
      }
      if (verifier.isRegisteredEE) {
        form.getCheckBox('V_IS_REE').check();
      }
      if (verifier.isRegisteredME) {
        form.getCheckBox('V_IS_RME').check();
      }

      form.getTextField('WATTS_LOSS').setText(`${verifiedWattsLoss}`);
      form.getTextField('phase').setText(`${verifiedPhase}`);
      form.getTextField('disc_manuf').setText(`${verifiedDescOrManuf}`);
      form.getTextField('primary_voltage').setText(`${verifiedPrimaryVoltage}`);
      form.getTextField('secondary_voltage').setText(`${''}`);
      form.getTextField('TYPE_INSULATION_FLUID').setText(`${verifiedTypeOfInsulatingFluid}`);
      form.getTextField('LEAKAGE_R_TEST').setText(`${verifiedLeakageReactanceTest}`);
      form.getTextField('TTR').setText(`${verifiedTransformerTurnsRatio}`);
      form.getTextField('EXCITNG_CURRENT_TEST').setText(`${verifiedExcitingCurrentTest}`);
      form.getTextField('kva').setText(`${verifiedKVA}`);
      form.getTextField('VERIFIED_ON').setText(`${dateVerified}`);
      form.getTextField('EXPIRES_ON').setText(`${dateExpires}`);
      form.getTextField('INSPECT_OR_DATE_ISSUED').setText(`${''}`);
      form.getTextField('INSPECT_OR_NO').setText(`${''}`);
      form.getTextField('INSPECT_FEE').setText(`${''}`);

      const _ownerLessee = `${electricalPermit.buildingPermit.applicant.firstName} ${electricalPermit.buildingPermit.applicant.middleInitial} ${electricalPermit.buildingPermit.applicant.lastName}`;
      form.getTextField('name_of_owner_lessee').setText(`${_ownerLessee}`);
      const _location = `${electricalPermit.buildingPermit.applicant.addressNo} ${electricalPermit.buildingPermit.applicant.addressStreet} ${electricalPermit.buildingPermit.applicant.addressBarangay} ${electricalPermit.buildingPermit.applicant.addressCity}`;
      form.getTextField('location').setText(`${_location}`);

      form.getTextField('EP_NO').setText(`${electricalPermit.applicationNo}`);
      form.getTextField('EP_DATE_ISSUED').setText(`${''}`);

      form.getTextField('EI').setText(`${electricalInspector.completeName}`);
      form.getTextField('EI').setText(`${electricalInspector.completeName}`);
      form.getTextField('EI_SIGNED_DATE').setText(`${_electricalInspectorDateSigned}`);
      form.getTextField('prc_reg_no').setText(`${electricalInspector.prcNo}`);
      form.getTextField('prc_reg_no').setText(`${electricalInspector.prcNo}`);
      form.getTextField('validity').setText(`${electricalInspector.validity}`);

      form.getTextField('ces_prc_no').setText(`${chiefElectricalSection.prcNo}`);
      form.getTextField('ces_date_signed').setText(`${_chiefElectricalSectionDateSigned}`);
      form.getTextField('ces_prc_no').setText(`${chiefElectricalSection.prcNo}`);
      form.getTextField('ces_licensed_validity').setText(`${chiefElectricalSection.validity}`);
      form.getTextField('CES').setText(`${chiefElectricalSection.completeName}`);

      form.getTextField('CIED').setText(`${chiefInspectionEnforcementDivision.completeName}`);
      form
        .getTextField('cied_date_signed')
        .setText(`${_chiefInspectionEnforcementDivisionDateSigned}`);

      form.getTextField('CPED').setText(`${chiefProcessingAndEvaluationDivision.completeName}`);
      form
        .getTextField('cped_date_signed')
        .setText(`${_chiefInspectionEnforcementDivisionDateSigned}`);

      const pdfBytes = await pdfDoc.save();
      const file = new Blob([pdfBytes], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    } catch (err) {
      console.log(err);
    }
  }
}
