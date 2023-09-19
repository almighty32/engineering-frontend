import { Injectable } from '@angular/core';
import { IAutomaticManualTransferSwitchModel } from '@shared/model/interface/certificates/electical/iautomatic-manual-transfer-switch-model';
import { IElectricalInspectionModel } from '@shared/model/interface/certificates/electical/ielectrical-inspection-model';
import { IIllegalElectricalInstallationModel } from '@shared/model/interface/certificates/electical/iillegal-electrical-installation-model';
import { INoticeIllegalMechanicalInstallationModel } from '@shared/model/interface/certificates/mechanical/inotice-illegal-mechanical-installation-model';
import { PDFDocument } from 'pdf-lib';
import { DateService } from '../../../date.service';

@Injectable({
  providedIn: 'root',
})
export class IllegalMechanicalInstallationPrintService {
  fileName = 'notice_of_illegal_mechanical_installation';

  constructor(private dateService: DateService) {}

  async print(data: INoticeIllegalMechanicalInstallationModel) {
    const element = data;
    try {
      const secondPdfBytes = await fetch(
        `/assets/pdfs/certificates/mechanical/${this.fileName}.pdf`
      ).then(res => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(secondPdfBytes);
      pdfDoc.setTitle('Automatic or Manual Transfer Switch');

      //! TODO: put your code below
      const fieldNames = pdfDoc
        .getForm()
        .getFields()
        .map(f => f.getName());
      console.log({ fieldNames });
      const form = pdfDoc.getForm();

      // const {
      // } = element;

      const d = '{"name":"John","test":"test", "age":30, "city":"New York"}';

      class InspectionTest {
        constructor({ machine = '' }) {}
      }

      class Person {
        name: string | undefined | null;
      }

      const s = new Person();
      s.name = 'asd';
      const va: Person[] = [s, s, s, s];

      // const a = new InspectionTest((machine = ''));
      const l = {
        test: va,
      };

      const parsed: Person = JSON.parse(d);
      console.log(parsed.name);
      console.log(JSON.stringify(l));

      // form.getTextField('address no').setText(`${addressNo}`);

      const pdfBytes = await pdfDoc.save();
      const file = new Blob([pdfBytes], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    } catch (err) {
      console.log(err);
    }
  }
}
