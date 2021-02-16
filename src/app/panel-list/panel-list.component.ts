import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataStorageService } from '../shared/data-stoarage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.css'],

})
export class PanelListComponent implements OnInit {
  displayedHead: string[] = [' Panel Name', ' Mac_id', ' Lat', ' Long', ' Location'];
  ModalHead: string[] = ['Parameters', 'Phase'];
  data_array: any = [];
  v_Status: any;
  mcb_Status: any;
  load_Status: any;
  pf_Status: any;
  public latitude: any;
  public longitude: any;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private datastorageservice: DataStorageService,
    private router: Router) {
  }

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit(): void {
    this.datastorageservice.fetchData().subscribe(data => {
      this.data_array = data['result'];
      console.log(this.data_array);
    }, err => {
      console.log(err);
    });
  }

  getDetail(name) {
    this.data_array.forEach(e => {
      if (e.panel_name === name) {
        console.log(name);
        this.v_Status = e.r_volt_status;
        this.mcb_Status = e.r_mcb_status;
        this.load_Status = e.r_load_status;
        this.pf_Status = e.r_pf_status;

      }
    });
  }
  selectLocation(event) {
    console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }
  getLocation(lat, lng) {
    this.data_array.forEach(e => {
      if (e.Lat === lat && e.Lng === lng) {
        this.latitude = e.Lat;
        this.longitude = e.Lng;
      }
    })
  }

}
