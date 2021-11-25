import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export interface Appointment {
  id: number;
  doctor: string;
  patientName: string;
}

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css'],
})
export class AppoinmentComponent implements OnInit {
  listofApp: Appointment[] = [
    {
      id: 1,
      doctor: 'Aditya',
      patientName: 'Rahul',
    },
    {
      id: 2,
      doctor: 'Adi',
      patientName: 'Rohit',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  
}
