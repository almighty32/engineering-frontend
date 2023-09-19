import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  BPColumns = ['date', 'applicationNo', 'building-permit-no', 'applicant', 'location', 'action'];
  APColumns = [
    'date',
    'application-no',
    'architectural-permit-no',
    'applicant',
    'location',
    'status',
    'action',
  ];
  CSPColumns = [
    'date',
    'application-no',
    'cs-permit-no',
    'applicant',
    'location',
    'status',
    'action',
  ];
  ElectricalPColumns = [
    'date',
    'application-no',
    'electrical-permit-no',
    'applicant',
    'location',
    'status',
    'action',
  ];
  MPColumns = [
    'date',
    'application-no',
    'mechanical-permit-no',
    'applicant',
    'location',
    'status',
    'action',
  ];
  ElectronicPColumns = [
    'date',
    'application-no',
    'electronic-permit-no',
    'applicant',
    'location',
    'status',
    'action',
  ];

  SPColumns = [
    'date',
    'application-no',
    'sanitary-permit-no',
    'applicant',
    'location',
    'status',
    'action',
  ];
  PPColumns = [
    'date',
    'application-no',
    'plumbing-permit-no',
    'applicant',
    'location',
    'status',
    'action',
  ];

  FPColumns = ['date', 'fencing-permit-no', 'applicant', 'location', 'action'];
  DPColumns = ['date', 'demolition-permit-no', 'applicant', 'location', 'action'];
  EGPPColumns = ['date', 'egp-permit-no', 'applicant', 'location', 'action'];
  TSCPColumns = ['date', 'tsc-permit-no', 'applicant', 'location', 'action'];
  ScaffoldingPColumns = ['date', 'scaffolding-permit-no', 'applicant', 'location', 'action'];
  SidewalkPColumns = ['date', 'sidewalk-permit-no', 'applicant', 'location', 'action'];

  // electrical
  UEICertColumns = ['certificateNo', 'epNo', 'owner_lessee', 'action'];
  IEICertColumns = ['certificateNo', 'epNo', 'owner_lessee', 'action'];
  TPCCertColumns = ['certificateNo', 'epNo', 'owner_lessee', 'action'];
  EWCCertColumns = ['certificateNo', 'epNo', 'owner_lessee', 'action'];
  IOSTCertColumns = ['certificateNo', 'epNo', 'owner_lessee', 'action'];
  HVMVPDMCertColumns = ['certificateNo', 'epNo', 'owner_lessee', 'action'];
  ILVSGCertColumns = ['certificateNo', 'epNo', 'owner_lessee', 'action'];
  PDPCertColumns = ['certificateNo', 'epNo', 'owner_lessee', 'action'];
  LDPCertColumns = ['certificateNo', 'epNo', 'owner_lessee', 'action'];
  GUPSCertColumns = ['certificateNo', 'epNo', 'owner_lessee', 'action'];
  MCCCertColumns = ['certificateNo', 'epNo', 'owner_lessee', 'action'];
  AMTSCertColumns = ['certificateNo', 'epNo', 'owner_lessee', 'action'];

  // mechanical
  IMIColumns = ['certificateNo', 'mpNo', 'owner_lessee', 'action'];
  MRColumns = ['certificateNo', 'mpNo', 'owner_lessee', 'action'];
  SBColumns = ['certificateNo', 'mpNo', 'owner_lessee', 'action'];
  UPVColumns = ['certificateNo', 'mpNo', 'owner_lessee', 'action'];
  GPBColumns = ['certificateNo', 'mpNo', 'owner_lessee', 'action'];
  ICEColumns = ['certificateNo', 'mpNo', 'owner_lessee', 'action'];
  EDColumns = ['certificateNo', 'mpNo', 'owner_lessee', 'action'];
  MColumns = ['certificateNo', 'mpNo', 'owner_lessee', 'action'];
  EColumns = ['certificateNo', 'mpNo', 'owner_lessee', 'action'];
  ACRColumns = ['certificateNo', 'mpNo', 'owner_lessee', 'action'];

  constructor() {}
}
