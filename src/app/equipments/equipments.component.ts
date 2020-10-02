import { Component, OnInit } from '@angular/core';
import { Equipment } from '../models/Equipment';

import { EquipmentService } from '../services/equipment.service';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {
  equipments : Equipment[]; 

  constructor(private equipmentService:EquipmentService) { }

  ngOnInit(): void {
    this.equipmentService.getEquipments().subscribe(equipments => {
      this.equipments = equipments;
    })
  }

  isArray(val) {
    return Array.isArray(val);
  }

}
