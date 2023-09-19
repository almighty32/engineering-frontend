import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { NGXLogger } from 'ngx-logger';
import { Title } from '@angular/platform-browser';
// import { NotificationService } from 'src/app/core/services/notification.service';
import { SelectionModel } from '@angular/cdk/collections';

import { PDFDocument } from 'pdf-lib';

import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { DialogOverviewExampleDialogComponent } from '../building-list/building-list.component';
import { CreateBuildingPermitDialogComponent } from '../create-building-permit-dialog/create-building-permit-dialog.component';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { MtxGridColumn } from '@ng-matero/extensions/grid';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-list-issued-permit',
  templateUrl: './list-issued-permit.component.html',
  styleUrls: ['./list-issued-permit.component.scss'],
})
export class ListIssuedPermitComponent implements OnInit {
  animal?: string;
  name?: string;
  ELEMENT_DATA: IBuildingPermitModel[] = [];
  printTitle = 'BUILDING';
  displayedColumns: string[] = [
    'applicationNo',
    'firstName',
    'areaNo',
    'lotNo',
    'blockNo',
    'tctNo',
    'taxDecNo',
    'street',
    'baranggay',
    'cityMun',
    'action',
  ];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  selection = new SelectionModel<IBuildingPermitModel>(true, []);

  columns: MtxGridColumn[] = [
    {
      header: 'Date',
      field: 'created_at',
      width: '150px',
      pinned: 'left',
    },
    { header: 'Patient Name', field: 'completeName', width: '200px', pinned: 'left' },
    { header: 'Hospital No', field: 'hospitalNo', width: '200px', pinned: 'left' },
    { header: 'Address', field: 'address', width: '200px' },
    { header: 'Sex', field: 'sex', width: '200px' },
    // { header: 'Last Visit', field: 'patientComplains', width: '300px', pinned: 'left' },
    { header: 'Birth Date', field: 'birthDate', width: '200px' },
    {
      header: 'Action',
      field: 'action',
      width: '150px',
      pinned: 'right',
      right: '0px',
      type: 'button',
      buttons: [
        {
          type: 'icon',
          text: 'edit',
          icon: 'edit',
          tooltip: 'Edit',
        },
        {
          type: 'icon',
          text: 'print',
          icon: 'folder_shared',
          tooltip: 'View Records',
        },
      ],
    },
  ];

  list: IBuildingPermitModel[] = [];

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private buildingPermitService: BuildingPermitService,
    private titleService: Title,
    public dialog: MatDialog,
    private mtxDialog: MtxDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Building Permit');
    // this.logger.log('Building permits loaded');
    // this.notificationService.openSnackBar('Building permits loaded');
    this.dataSource.sort = this.sort;
    this.fetchAllBuildingPermit();

    this.buildingPermitService.buildingPermitList.subscribe(msg => {
      console.log({ msg });
      this.dataSource = new MatTableDataSource(msg);
      this.ELEMENT_DATA = msg;
    });
  }
  fetchAllBuildingPermit() {
    this.buildingPermitService.findAll();
  }
  createBuildingPermit() {
    this.buildingPermitService.resetBuildingPermit();
    this.openEditDialog();
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(CreateBuildingPermitDialogComponent, {
      hasBackdrop: true,

      width: '95vw',
      // minHeight: '90vh',
      maxHeight: '90vh',
      disableClose: true,
      autoFocus: false,
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '350px',
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(element: IBuildingPermitModel) {
    this.buildingPermitService.setData(element);
    this.openEditDialog();
    // this.router.navigateByUrl('/building/create');
    // [routerLink]="['/building  /create']"
  }

  async printNew(element: IBuildingPermitModel) {
    try {
      const secondPdfBytes = await fetch('/assets/pdfs/building_permit_form.pdf').then(res =>
        res.arrayBuffer()
      );

      const pdfDoc = await PDFDocument.load(secondPdfBytes);

      // Modify doc, fill out the form...
      const fieldNames = pdfDoc
        .getForm()
        .getFields()
        .map(f => f.getName());
      console.log({ fieldNames });

      const form = pdfDoc.getForm();

      // const possibleFields = Array.from({ length: 111 }, (_, i) => i);
      // possibleFields.forEach((possibleField) => {
      //   try {
      //     form
      //       .getTextField(`Text${possibleField}`)
      //       .setText(possibleField.toString());
      //   } catch (error) {
      //     // console.error(error);
      //   }
      // });
      const areaNo = element.areaNo;
      const applicationNo = element.applicationNo;

      const cutAreaNo = areaNo.slice(0, 10);
      const cutApplicationNo = applicationNo.slice(0, 10);

      form.getTextField('NEW').setText('/');

      form.getTextField('APPLICATION NO').setText(cutApplicationNo);
      form.getTextField('AREA NO').setText(cutAreaNo);

      const { applicant } = element;
      form.getTextField('OWNER').setText('');
      form.getTextField('FIRSTNAME').setText(applicant.firstName.toUpperCase());
      form.getTextField('LASTNAME').setText(applicant.lastName.toUpperCase());
      form.getTextField('MIDDLE INITIAL').setText(applicant.middleInitial.toUpperCase());
      form.getTextField('TIN').setText(applicant.tin);

      form.getTextField('FORM OF OWNERSHIP').setText(element.formOfOwnership.toUpperCase());
      form.getTextField('ENTERPRISE_ADDRESS_NO').setText(applicant.addressNo.toUpperCase());
      form.getTextField('ENTERPRISE_ADDRESS_ST').setText(applicant.addressStreet.toUpperCase());
      form
        .getTextField('ENTERPRISE_ADDRESS_BARANGGAY')
        .setText(applicant.addressBarangay.toUpperCase());
      form
        .getTextField('ENTERPRISE_ADDRESS_CITY_MUNICIPALITY')
        .setText(applicant.addressCity.toUpperCase());
      form
        .getTextField('ENTERPRISE_ADDRESS_ZIP_CODE')
        .setText(applicant.addressZipCode.toUpperCase());
      form.getTextField('CONTACT_NO').setText(applicant.contactNo.toUpperCase());

      const { constructionLocation } = element;

      form.getTextField('LOT_NO').setText(constructionLocation.lotNo);
      form.getTextField('BLK_NO').setText(constructionLocation.blockNo);
      form.getTextField('TCT_NO').setText(constructionLocation.tctNo.toUpperCase());
      form.getTextField('CURRENT_TAX_DEC_NO').setText(constructionLocation.taxDecNo);
      form.getTextField('STREET').setText(constructionLocation.street.toUpperCase());
      // form.getTextField('BARANGAY').setText(constructionLocation.barangay.toUpperCase());
      form.getTextField('CITY_MUNICIPALITY_OF').setText(constructionLocation.cityMun.toUpperCase());

      // location of construction
      // if (element.inspectorOrSupervisor) {
      //   const { completeName, address, prcNo, ptrNo, issuedAt, validity, dateIssued, tinNo } =
      //     element.inspectorOrSupervisor;

      //   form.getTextField('ARCHITECT OR CIVIL ENGINEER').setText(completeName.toUpperCase());
      //   form.getTextField('Address').setText(address.toUpperCase());
      //   form.getTextField('PRC No').setText(prcNo.toUpperCase());
      //   form.getTextField('PTR No').setText(ptrNo.toUpperCase());
      //   form.getTextField('Issued at').setText(issuedAt.toUpperCase());
      //   form.getTextField('Validity').setText(validity.toUpperCase());
      //   form.getTextField('Date Issued').setText(dateIssued.toUpperCase());
      //   form.getTextField('TIN_2').setText(tinNo.toUpperCase());
      // }

      // if (element.scopeOfWork.newConstruction) {
      //   form.getCheckBox('NEW_CONSTRUCTION').check();
      // }

      // if (element.scopeOfWork.erection) {
      //   form.getCheckBox('ERECTION').check();
      // }
      // if (element.scopeOfWork.addition) {
      //   form.getCheckBox('ADDITION').check();
      // }
      // if (element.scopeOfWork.alteration) {
      //   form.getCheckBox('ALTERATION').check();
      // }
      // if (element.scopeOfWork.erection) {
      //   form.getCheckBox('ERECTION').check();
      // }

      // if (element.scopeOfWork.renovation) {
      //   form.getCheckBox('RENOVATION').check();
      // }

      // if (element.scopeOfWork.convertion) {
      //   form.getCheckBox('CONVERSION').check();
      // }

      // if (element.scopeOfWork.moving) {
      //   form.getCheckBox('MOVING').check();
      // }
      // if (element.scopeOfWork.repair) {
      //   form.getCheckBox('REPAIR').check();
      // }
      // if (element.scopeOfWork.raising) {
      //   form.getCheckBox('RAISING').check();
      // }
      // if (element.scopeOfWork.accessoryBuildingOrStruc) {
      //   form.getCheckBox('ACCESSORY_BUILDING').check();
      // }
      // if (element.scopeOfWork.legalization) {
      //   form.getCheckBox('LEGALIZATION_OF_EXISTING_BUILDING').check();
      // }
      // if (element.scopeOfWork.other) {
      //   form.getCheckBox('OTHERS').check();
      // }

      // if (element.charOccupancygroupA) {
      //   form.getTextField('GROUP A RESIDENTIAL DWELLINGS').setText('/');
      // }
      // if (element.charOccupancygroupASingle) {
      //   form.getCheckBox('SINGLE').check();
      // }
      // if (element.charOccupancygroupADuplex) {
      //   form.getCheckBox('DUPLEX').check();
      // }
      // if (element.charOccupancygroupAResidential) {
      //   form.getCheckBox('RESIDENTIAL R1 R2').check();
      // }

      // //
      // if (element.charOccupancygroupB) {
      //   form.getTextField('GROUP B  RESIDENTIAL').setText('/');
      // }
      // if (element.charOccupancygroupBHotel) {
      //   form.getCheckBox('HOTEL').check();
      // }
      // if (element.charOccupancygroupBDormitory) {
      //   form.getCheckBox('DORMITORY').check();
      // }
      // if (element.charOccupancygroupBResidential) {
      //   form.getCheckBox('RESIDENTIAL R3 R4 R5').check();
      // }

      // if (element.charOccupancygroupBTownhouse) {
      //   form.getCheckBox('TOWNHOUSE').check();
      // }
      // if (element.charOccupancygroupBBoardingHouse) {
      //   form.getCheckBox('BOARDINGHOUSE').check();
      // }
      // if (element.charOccupancygroupBOthers) {
      //   form.getCheckBox('OTHERS_4').check();
      // }

      // if (element.charOccupancygroupC) {
      //   form.getTextField('GROUP C  EDUCATIONAL  RECREATIONAL').setText('/');
      // }
      // if (element.charOccupancygroupCSchoolBuilding) {
      //   form.getCheckBox('SCHOOL BUILDING').check();
      // }
      // if (element.charOccupancygroupCCivicCenter) {
      //   form.getCheckBox('CIVIC CENTER').check();
      // }
      // if (element.charOccupancygroupCClubHouse) {
      //   form.getCheckBox('CLUBHOUSE').check();
      // }
      // if (element.charOccupancygroupCSchoolAuditorumGym) {
      //   form.getCheckBox('SCHOOL AUDITORIUM').check();
      // }
      // if (element.charOccupancygroupCChurchMosqueTempleChapel) {
      //   form.getCheckBox('CHURCH MOSQUE').check();
      // }
      // if (element.charOccupancygroupCOthers) {
      //   form.getCheckBox('OTHERS_7').check();
      // }

      // if (element.charOccupancygroupD) {
      //   form.getTextField('GROUP D  INSTITUTIONAL').setText('/');
      // }
      // if (element.charOccupancygroupDHospital) {
      //   form.getCheckBox('HOSPITAL OR SIMILAR STRUCTURE').check();
      // }

      // if (element.charOccupancygroupDHomeForTheAged) {
      //   form.getCheckBox('HOME FOR THE AGED').check();
      // }

      // if (element.charOccupancygroupDGovernmentOffice) {
      //   form.getCheckBox('GOVERNMENT OFFICE').check();
      // }

      // if (element.charOccupancygroupDOthers) {
      //   form.getCheckBox('OTHERS_10').check();
      // }

      // if (element.charOccupancygroupE) {
      //   form.getTextField('GROUP E  COMMERCIAL').setText('/');
      // }

      // if (element.charOccupancygroupEBank) {
      //   form.getCheckBox('BANK').check();
      // }

      // if (element.charOccupancygroupEDrinkingDining) {
      //   form.getCheckBox('DRINKING  DINING').check();
      // }

      // if (element.charOccupancygroupEShop) {
      //   form.getCheckBox('SHOP ie DRESS SHOP TAILORING').check();
      // }
      // if (element.charOccupancygroupEShop) {
      //   form.getCheckBox('STORE').check();
      // }
      // if (element.charOccupancygroupEMall) {
      //   form.getCheckBox('SHOPPING').check();
      // }
      // if (element.charOccupancygroupEOthers) {
      //   form.getCheckBox('OTHERS_3').check();
      // }

      // if (element.charOccupancygroupF) {
      //   form.getTextField('GROUP F  LIGHT INDUSTRIAL').setText('/');
      // }
      // if (element.charOccupancygroupFFactory) {
      //   form.getCheckBox('FACTORY  PLANT USING INCOMBUSTIBLE').check();
      // }
      // if (element.charOccupancygroupFOthers) {
      //   form.getCheckBox('OTHERS_5').check();
      // }

      // if (element.charOccupancygroupG) {
      //   form.getTextField('GROUP G  MEDIUM INDUSTRIAL').setText('/');
      // }
      // if (element.charOccupancygroupGStorage) {
      //   form.getCheckBox('STORAGE  WAREHOUSE FOR HAZARDOUS').check();
      // }
      // if (element.charOccupancygroupGFactory) {
      //   form.getCheckBox('FACTORY FOR HAZARDOUS HIGHLY').check();
      // }
      // if (element.charOccupancygroupGOthers) {
      //   form.getCheckBox('OTHERS_3').check();
      // }
      // if (element.charOccupancygroupH) {
      //   form.getTextField('GROUP H  ASSEMBLY OCCUPANT').setText('/');
      // }
      // if (element.charOccupancygroupHTheater) {
      //   form.getCheckBox('THEATER AUDITORIUM CONVENTION HALL').check();
      // }
      // if (element.charOccupancygroupHOthers) {
      //   form.getCheckBox('OTHERS_2').check();
      // }
      // if (element.charOccupancygroupI) {
      //   form.getTextField('GROUP I  ASSEMBLY OCCUPANT').setText('/');
      // }

      // if (element.charOccupancygroupIColiseum) {
      //   form.getCheckBox('COLISEUM SPORTS COMPLEX').check();
      // }
      // if (element.charOccupancygroupIOthers) {
      //   form.getCheckBox('OTHERS_6').check();
      // }

      // if (element.charOccupancygroupJ) {
      //   form.getTextField('GROUP J  J1 AGRICULTURAL').setText('/');
      // }
      // if (element.charOccupancygroupJPrivateCarport) {
      //   form.getCheckBox('BARN GRANARY POULTRY HOUSE').check();
      // }
      // if (element.charOccupancygroupJOthers) {
      //   form.getCheckBox('OTHERS_8').check();
      // }

      form.getTextField('OCCUPANCY CLASSIFIED').setText(element.occupancyClassified.toUpperCase());
      form.getTextField('NUMBER OF UNITS').setText(element.numberOfUnits.toString());
      form.getTextField('NUMBER OF STOREY').setText(element.numberOfStory.toString());
      form.getTextField('TOTAL FLOOR AREA').setText(element.floorArea.toString());
      form.getTextField('LOT AREA').setText(element.lotArea.toString());
      form.getTextField('TOTAL ESTIMATED COST P').setText(element.totalEstimatedCost.toString());
      form.getTextField('BUILDING').setText(element.buildingCost.toString());
      form.getTextField('ELECTRICAL').setText(element.electricalCost.toString());
      form.getTextField('MECHANICAL').setText(element.mechanicalCost.toString());
      form.getTextField('ELECTRONICS').setText(element.ElectronicCost.toString());
      form.getTextField('PLUMBING').setText(element.plumbingCost.toString());
      form.getTextField('P').setText(element.costOfEquipmentInstalled.toString());

      const pdfBytes = await pdfDoc.save();
      const file = new Blob([pdfBytes], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    } catch (err) {
      console.log(err);
    }
  }

  // async printPdf() {
  //   try {
  //     const secondPdfBytes = await fetch('/assets/pdfs/building_permit_form.pdf').then(res =>
  //       res.arrayBuffer()
  //     );

  //     const pdfDoc = await PDFDocument.load(secondPdfBytes);

  //     // Modify doc, fill out the form...
  //     const fieldNames = pdfDoc
  //       .getForm()
  //       .getFields()
  //       .map(f => f.getName());
  //     console.log({ fieldNames });

  //     const form = pdfDoc.getForm();

  //     // const possibleFields = Array.from({ length: 111 }, (_, i) => i);
  //     // possibleFields.forEach((possibleField) => {
  //     //   try {
  //     //     form
  //     //       .getTextField(`Text${possibleField}`)
  //     //       .setText(possibleField.toString());
  //     //   } catch (error) {
  //     //     // console.error(error);
  //     //   }
  //     // });

  //     form.getTextField('NEW').setText('/');
  //     form.getTextField('AREA NO').setText('1234567890');
  //     form.getTextField('firstname').setText('JORDAN');
  //     form.getTextField('lastname').setText('TORREON');
  //     form.getTextField('mi').setText('C');
  //     form.getTextField('fill_74').setText('jordanX44');
  //     form
  //       .getTextField('ADDRESS NO STREET BARANGAY CITY  MUNICIPALITY ZIP CODE')
  //       .setText('132D T. PADILLA ST., T. PADILLA, CEBU CITY, 6000');

  //     // form.getCheckBox('Check Box7').check();

  //     // pdfDoc.removePage(0);
  //     // pdfDoc.removePage(1);
  //     // pdfDoc.removePage(1);
  //     // pdfDoc.removePage(1);
  //     // pdfDoc.removePage(1);

  //     const pdfBytes = await pdfDoc.save();
  //     const file = new Blob([pdfBytes], { type: 'application/pdf' });
  //     const fileURL = URL.createObjectURL(file);
  //     window.open(fileURL);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // printList() {
  //   const compiledData: any[] = [];
  //   this.ELEMENT_DATA.forEach((element: IBuildingPermitModel) => {
  //     compiledData.push([
  //       { text: element.applicationNo },
  //       { text: 'element.date' },
  //       { text: element.areaNo },
  //       { text: element.firstName },
  //       { text: element.lotNo },
  //       { text: element.blockNo },
  //       { text: element.tctNo },
  //       { text: element.tctNo },
  //       { text: element.street },
  //       { text: element.baranggay },
  //       { text: element.cityMun },
  //       { text: 'element.status' },
  //     ]);
  //   });
  //   pdfMake
  //     .createPdf({
  //       footer: (currentPage, pageCount) => {
  //         return {
  //           columns: [
  //             {
  //               text: currentPage.toString() + ' of ' + pageCount.toString(),
  //               alignment: 'right',
  //               margin: [0, 0, 50, 0],
  //             },
  //           ],
  //         };
  //       },
  //       // function(currentPage, pageCount) { return currentPage.toString() + ' of ' + pageCount },
  //       // header: function(currentPage, pageCount, pageSize) {
  //       //   // you can apply any logic and return any valid pdfmake element

  //       //   return [
  //       //     { text: 'simple text', alignment: (currentPage % 2) ? 'left' : 'right' },
  //       //     { canvas: [ { type: 'rect', x: 170, y: 32, w: pageSize.width - 170, h: 40 } ] }
  //       //   ]
  //       // },
  //       pageOrientation: 'landscape',
  //       pageSize: 'LEGAL',
  //       content: [
  //         {
  //           text: 'REPUBLIC OF THE PHILIPPINES',
  //           alignment: 'center',
  //           style: {
  //             fontSize: 15,
  //             lineHeight: 1.3,
  //           },
  //         },
  //         { text: 'PROVINCE OF CEBU', alignment: 'center', lineHeight: 1.3 },
  //         { text: 'CITY OF CEBU', alignment: 'center', lineHeight: 1.3 },
  //         {
  //           margin: [0, 20, 0, 20],
  //           text: `${this.printTitle} PERMIT LIST`,
  //           alignment: 'center',
  //           fontSize: 15,
  //           bold: true,
  //           lineHeight: 1.3,
  //         },
  //         { text: 'Month of March 2022', alignment: 'center', lineHeight: 1.3 },
  //         {
  //           margin: [0, 20, 0, 0],
  //           style: 'tableExample',
  //           table: {
  //             // heights: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
  //             widths: [
  //               '*',
  //               '*',
  //               'auto',
  //               'auto',
  //               'auto',
  //               'auto',
  //               'auto',
  //               'auto',
  //               '*',
  //               '*',
  //               '*',
  //               'auto',
  //             ],
  //             body: [
  //               [
  //                 {
  //                   text: 'Application Code',
  //                   style: 'tableHeader',
  //                   rowSpan: 2,
  //                   margin: [0, 10, 0, 0],
  //                 },
  //                 { text: 'Trans Date', style: 'tableHeader', rowSpan: 2, margin: [0, 10, 0, 0] },
  //                 { text: 'Area Code', style: 'tableHeader', rowSpan: 2, margin: [0, 10, 0, 0] },
  //                 {
  //                   text: 'Application Name',
  //                   style: 'tableHeader',
  //                   rowSpan: 2,
  //                   margin: [0, 10, 0, 0],
  //                 },
  //                 { text: 'Address of Property', style: 'tableHeader', colSpan: 7 },
  //                 {},
  //                 {},
  //                 {},
  //                 {},
  //                 {},
  //                 {},
  //                 { text: 'Status', style: 'tableHeader', rowSpan: 2, margin: [0, 20, 0, 0] },
  //               ],
  //               [
  //                 { text: 'Application Code', style: 'tableHeader' },
  //                 { text: 'Date', style: 'tableHeader' },
  //                 { text: 'Area Code', style: 'tableHeader' },
  //                 { text: 'Application Name', style: 'tableHeader' },
  //                 { text: 'Lot No', style: 'tableHeader' },
  //                 { text: 'Block No', style: 'tableHeader' },
  //                 { text: 'TCT No', style: 'tableHeader' },
  //                 { text: 'TD No', style: 'tableHeader' },
  //                 { text: 'St', style: 'tableHeader', margin: [0, 5, 0, 0] },
  //                 { text: 'Baranggay', style: 'tableHeader', margin: [0, 5, 0, 0] },
  //                 { text: 'City/Mun', style: 'tableHeader', margin: [0, 5, 0, 0] },
  //                 { text: 'Status', style: 'tableHeader', margin: [0, 5, 0, 0] },
  //               ],
  //               ...compiledData,
  //             ],
  //           },
  //         },
  //       ],
  //       styles: {
  //         header: {
  //           fontSize: 18,
  //           bold: true,
  //           margin: [0, 0, 0, 10],
  //         },
  //         subheader: {
  //           fontSize: 16,
  //           bold: true,
  //           margin: [0, 10, 0, 5],
  //         },
  //         tableExample: {
  //           margin: [0, 5, 0, 15],
  //         },
  //         tableOpacityExample: {
  //           margin: [0, 5, 0, 15],
  //           fillColor: 'blue',
  //           fillOpacity: 0.3,
  //         },
  //         tableHeader: {
  //           alignment: 'center',
  //           bold: true,
  //           color: 'black',
  //         },
  //       },
  //       defaultStyle: {
  //         // alignment: 'justify'
  //       },
  //     })
  //     .open({}, window);
  // }
}
