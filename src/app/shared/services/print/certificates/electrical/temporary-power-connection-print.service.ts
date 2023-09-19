import { Injectable } from '@angular/core';
import { TemporaryPowerConnectionModel } from '@shared/model/certificates/electrical/temporary-power-connection-model';
import { ITemporaryPowerConnectionModel } from '@shared/model/interface/certificates/electical/itemporary-power-connection-model';
import { DateService } from '@shared/services/date.service';
import { PDFDocument } from 'pdf-lib';

@Injectable({
  providedIn: 'root',
})
export class TemporaryPowerConnectionPrintService {
  fileName = 'cei_for_temporary_power_connection';

  constructor(private dateService: DateService) {}

  async print(data: ITemporaryPowerConnectionModel) {
    // TODO: uncomment this as a whole!
    // const element = data;
    // try {
    //   const secondPdfBytes = await fetch(
    //     `/assets/pdfs/certificates/electrical/${this.fileName}.pdf`
    //   ).then(res => res.arrayBuffer());
    //   const pdfDoc = await PDFDocument.load(secondPdfBytes);
    //   pdfDoc.setTitle('Automatic or Manual Transfer Switch');
    //   //! TODO: put your code below
    //   const fieldNames = pdfDoc
    //     .getForm()
    //     .getFields()
    //     .map(f => f.getName());
    //   console.log({ fieldNames });
    //   const form = pdfDoc.getForm();
    //   const {
    //     dateIssued: certificateDateIssued,
    //     verifier,
    //     electricalPermit,
    //     buildingOfficial: BO,
    //     electricalInspector: EI,
    //     chiefElectricalSection: CES,
    //     chiefInspectionEnforcementDivision: CIED,
    //     orNo,
    //     fee,
    //     datePaid,
    //     certificateNo,
    //   } = element;
    //   const {
    //     firstName,
    //     address,
    //     completeName: verifierCname,
    //     dateIssued,
    //     prcNo,
    //     validity,
    //     issuedAt,
    //     ptrNo,
    //     profession,
    //     isMechanicalE,
    //     isProfMechanicalE,
    //     isProfessionalEE,
    //     isRegisteredEE,
    //   } = verifier ?? new TemporaryPowerConnectionModel().verifier;
    //   form.getTextField('verifier').setText(`${verifierCname}`);
    //   form.getTextField('v_prc_no').setText(`${prcNo}`);
    //   const v_licensed_date_issued = this.dateService.formatDate(dateIssued);
    //   form.getTextField('v_licensed_date_issued').setText(`${v_licensed_date_issued}`);
    //   form.getTextField('v_license_validity').setText(`${validity}`);
    //   const { totalConnectionLoad, totalGeneratorCapacity, totalTransformerCapacity, building } =
    //     electricalPermit ?? new TemporaryPowerConnectionModel().electricalPermit;
    //   form.getTextField('tcl').setText(`${totalConnectionLoad}`);
    //   form.getTextField('ttc').setText(`${totalTransformerCapacity}`);
    //   form.getTextField('tg_ups_capacity').setText(`${totalGeneratorCapacity}`);
    //   //
    //   const { applicant, constructionLocation, formOfOwnership } =
    //     element.electricalPermit.buildingPermit;
    //   const {
    //     id,
    //     firstName: buildingFirstName,
    //     lastName: buildingLastNamem,
    //     middleInitial: buildingMiddle,
    //     tin,
    //     addressNo,
    //     addressStreet,
    //     addressBarangay,
    //     addressCity,
    //     addressZipCode,
    //     contactNo,
    //   } = applicant;
    //   const fOwnerLessee = 'name_of_owner_lessee';
    //   const fOwnerLesseeValue = `${buildingFirstName} ${buildingMiddle} ${buildingLastNamem}`;
    //   form.getTextField(fOwnerLessee).setText(fOwnerLesseeValue);
    //   form
    //     .getTextField('location')
    //     .setText(`${addressNo},${addressStreet}, ${addressBarangay},${addressCity} `);
    //   form.getTextField('ep_no').setText(`${element?.electricalPermit?.applicationNo}`);
    //   //
    //   const _certDateIssued = this.dateService.formatDate(certificateDateIssued);
    //   form.getTextField('DATE_ISSUED').setText(`${_certDateIssued}`);
    //   form.getTextField('CERTIFICATE_NO').setText(`${certificateNo}`);
    //   form.getTextField('OR_NO').setText(`${orNo}`);
    //   form.getTextField('FEE_PAID').setText(`${fee}`);
    //   const _datePaid = this.dateService.formatDate(datePaid);
    //   form.getTextField('DATE_PAID').setText(`${_datePaid}`);
    //   const fEInspector = 'electrical_inspector';
    //   form.getTextField(fEInspector).setText(`${EI.completeName}`);
    //   form.getTextField('ei_prc_reg_no').setText(`${EI.prcNo}`);
    //   form.getTextField('ei_validty').setText(`${EI.validity}`);
    //   const eiDateSigned = this.dateService.formatDate(EI.dateIssued);
    //   form.getTextField('ei_date_signed').setText(`${eiDateSigned}`);
    //   const fChiefElectrical = 'cheif_electrical';
    //   form.getTextField(fChiefElectrical).setText(`${CES.completeName}`);
    //   form.getTextField('cei_prc_no').setText(`${CES.prcNo}`);
    //   form.getTextField('cei_validity').setText(`${CES.validity}`);
    //   const cesDateSigned = this.dateService.formatDate(CES.dateIssued);
    //   form.getTextField('ces_signed_date').setText(`${cesDateSigned}`);
    //   const fchiefInspection = 'cheif_inspection';
    //   form.getTextField(fchiefInspection).setText(`${CIED.completeName}`);
    //   const _ciedDateSigned = this.dateService.formatDate(CIED.dateIssued);
    //   form.getTextField('cied_signed_date').setText(`${_ciedDateSigned}`);
    //   const fBuildingOfficial = 'BO';
    //   form.getTextField(fBuildingOfficial).setText(`${BO.completeName}`);
    //   const _boDateSigned = this.dateService.formatDate(BO.dateIssued);
    //   form.getTextField('bo_signed_date').setText(`${_boDateSigned}`);
    //   const f = [
    //     'days',
    //     'is_testing',
    //     'is_construction_purpose',
    //     'is_others',
    //     'others_specify',
    //     'for a period of',
    //     'days_from_date',
    //     'name_of_project',
    //     'ep_date_issued',
    //     'tg_ups_capacity',
    //     'v_licensed_date_issued',
    //     'group',
    //     'use_or_character_of_occupancy',
    //   ];
    //   const pdfBytes = await pdfDoc.save();
    //   const file = new Blob([pdfBytes], { type: 'application/pdf' });
    //   const fileURL = URL.createObjectURL(file);
    //   window.open(fileURL);
    // } catch (err) {
    //   console.log(err);
    // }
  }
}
