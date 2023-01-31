import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StorageManagerService } from '../storage-manager.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  showInventory = false;
  inventoryForm = new FormGroup({
    1: new FormGroup({
      slotOne: new FormControl(),
      slotTwo: new FormControl(),
    }),
    2: new FormGroup({
      slotOne: new FormControl(),
      slotTwo: new FormControl(),
    }),
    3: new FormGroup({
      slotOne: new FormControl(),
      slotTwo: new FormControl(),
    }),
    4: new FormGroup({
      slotOne: new FormControl(),
      slotTwo: new FormControl(),
    }),
    5: new FormGroup({
      slotOne: new FormControl(),
      slotTwo: new FormControl(),
    }),
    6: new FormGroup({
      slotOne: new FormControl(),
      slotTwo: new FormControl(),
    }),
    7: new FormGroup({
      slotOne: new FormControl(),
      slotTwo: new FormControl(),
    }),
    8: new FormGroup({
      slotOne: new FormControl(),
      slotTwo: new FormControl(),
    }),
    9: new FormGroup({
      slotOne: new FormControl(),
      slotTwo: new FormControl(),
    }),
    10: new FormGroup({
      slotOne: new FormControl(),
      slotTwo: new FormControl(),
    }),
    11: new FormGroup({
      slotOne: new FormControl(),
      slotTwo: new FormControl(),
    }),
    12: new FormGroup({
      slotOne: new FormControl(),
      slotTwo: new FormControl(),
    }),
    13: new FormGroup({
      slotOne: new FormControl(),
      slotTwo: new FormControl(),
    }),
    14: new FormGroup({
      slotOne: new FormControl(),
      slotTwo: new FormControl(),
    }),
    15: new FormGroup({
      slotOne: new FormControl(),
      slotTwo: new FormControl(),
    }),
    16: new FormGroup({
      slotOne: new FormControl(),
      slotTwo: new FormControl(),
    }),
    17: new FormGroup({
      slotOne: new FormControl(),
      slotTwo: new FormControl(),
    }),
    18: new FormGroup({
      slotOne: new FormControl(),
      slotTwo: new FormControl(),
    }),
    19: new FormGroup({
      slotOne: new FormControl(),
      slotTwo: new FormControl(),
    }),
    20: new FormGroup({
      slotOne: new FormControl(),
      slotTwo: new FormControl(),
    }),
  });

  constructor(
    private storageManagerService: StorageManagerService
  ) { }

  ngOnInit(): void {
    const inventoryData: any = this.storageManagerService.getFromStorage('inventory');
    if (inventoryData) {
      this.inventoryForm.setValue({
        1: {
          slotOne: inventoryData[1].slotOne,
          slotTwo: inventoryData[1].slotTwo,
        },
        2: {
          slotOne: inventoryData[2].slotOne,
          slotTwo: inventoryData[2].slotTwo,
        },
        3: {
          slotOne: inventoryData[3].slotOne,
          slotTwo: inventoryData[3].slotTwo,
        },
        4: {
          slotOne: inventoryData[4].slotOne,
          slotTwo: inventoryData[4].slotTwo,
        },
        5: {
          slotOne: inventoryData[5].slotOne,
          slotTwo: inventoryData[5].slotTwo,
        },
        6: {
          slotOne: inventoryData[6].slotOne,
          slotTwo: inventoryData[6].slotTwo,
        },
        7: {
          slotOne: inventoryData[7].slotOne,
          slotTwo: inventoryData[7].slotTwo,
        },
        8: {
          slotOne: inventoryData[8].slotOne,
          slotTwo: inventoryData[8].slotTwo,
        },
        9: {
          slotOne: inventoryData[9].slotOne,
          slotTwo: inventoryData[9].slotTwo,
        },
        10: {
          slotOne: inventoryData[10].slotOne,
          slotTwo: inventoryData[10].slotTwo,
        },
        11: {
          slotOne: inventoryData[11].slotOne,
          slotTwo: inventoryData[11].slotTwo,
        },
        12: {
          slotOne: inventoryData[12].slotOne,
          slotTwo: inventoryData[12].slotTwo,
        },
        13: {
          slotOne: inventoryData[13].slotOne,
          slotTwo: inventoryData[13].slotTwo,
        },
        14: {
          slotOne: inventoryData[14].slotOne,
          slotTwo: inventoryData[14].slotTwo,
        },
        15: {
          slotOne: inventoryData[15].slotOne,
          slotTwo: inventoryData[15].slotTwo,
        },
        16: {
          slotOne: inventoryData[16].slotOne,
          slotTwo: inventoryData[16].slotTwo,
        },
        17: {
          slotOne: inventoryData[17].slotOne,
          slotTwo: inventoryData[17].slotTwo,
        },
        18: {
          slotOne: inventoryData[18].slotOne,
          slotTwo: inventoryData[18].slotTwo,
        },
        19: {
          slotOne: inventoryData[19].slotOne,
          slotTwo: inventoryData[19].slotTwo,
        },
        20: {
          slotOne: inventoryData[20].slotOne,
          slotTwo: inventoryData[20].slotTwo,
        },
      })
    }

    this.inventoryForm.valueChanges.subscribe(changes => {
      this.storageManagerService.addToStorage('inventory', changes);
    });
  }

}
