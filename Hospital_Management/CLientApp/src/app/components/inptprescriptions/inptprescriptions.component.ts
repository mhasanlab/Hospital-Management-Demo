import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Inptprescriptions } from '../../models/inptprescriptions';
import { Patientlist } from '../../models/patientlist';
import { TestList } from '../../models/test-list';

@Component({
  selector: 'app-inptprescriptions',
  templateUrl: './inptprescriptions.component.html',
  styleUrls: ['./inptprescriptions.component.css']
})
export class InptprescriptionsComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
