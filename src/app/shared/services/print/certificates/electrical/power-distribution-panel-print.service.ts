// import { Injectable } from '@angular/core';
// import { IPowerDistributionPanelModel } from '@shared/model/interface/certificates/electical/ipower-distribution-panel-model';
// import { DateService } from '@shared/services/date.service';
// import { PDFDocument } from 'pdf-lib';

// @Injectable({
//   providedIn: 'root',
// })
// export class PowerDistributionPanelPrintService {
//   fileName = 'certificate_of_final_electrical_inspection';

//   constructor(private dateService: DateService) {}

//   async print(data: IPowerDistributionPanelModel) {
//     const element = data;
//     try {
//       const secondPdfBytes = await fetch(`${this.fileName}.pdf`).then(res => res.arrayBuffer());
//       const pdfDoc = await PDFDocument.load(secondPdfBytes);
//       pdfDoc.setTitle('Automatic or Manual Transfer Switch');

//       //! TODO: put your code below
//       const fieldNames = pdfDoc
//         .getForm()
//         .getFields()
//         .map(f => f.getName());
//       console.log({ fieldNames });
//       const form = pdfDoc.getForm();
//       // form.getTextField('address no').setText(`${addressNo}`);

//       const pdfBytes = await pdfDoc.save();
//       const file = new Blob([pdfBytes], { type: 'application/pdf' });
//       const fileURL = URL.createObjectURL(file);
//       window.open(fileURL);
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }
