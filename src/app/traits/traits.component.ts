import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StorageManagerService } from '../storage-manager.service';

@Component({
  selector: 'app-traits',
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.scss']
})
export class TraitsComponent implements OnInit {
  traitsForm = new FormGroup({
    strength: new FormGroup({
      value: new FormControl(),
      firstGroup: new FormControl(),
      secondGroup: new FormControl(),
    }),
    constitution: new FormGroup({
      value: new FormControl(),
      firstGroup: new FormControl(),
      secondGroup: new FormControl(),
    }),
    dexterity: new FormGroup({
      value: new FormControl(),
      firstGroup: new FormControl(),
      secondGroup: new FormControl(),
    }),
    charisma: new FormGroup({
      value: new FormControl(),
      firstGroup: new FormControl(),
      secondGroup: new FormControl(),
    }),
    wisdom: new FormGroup({
      value: new FormControl(),
      firstGroup: new FormControl(),
      secondGroup: new FormControl(),
    }),
    intelligence: new FormGroup({
      value: new FormControl(),
      firstGroup: new FormControl(),
      secondGroup: new FormControl(),
    }),
  });

  constructor(
    private storageManagerService: StorageManagerService
  ) { }

  ngOnInit(): void {
    const traitsData: any = this.storageManagerService.getFromStorage('traits');
    if (traitsData) {
      this.traitsForm.setValue({
        strength: {
          value: traitsData.strength.value,
          firstGroup: traitsData.strength.firstGroup,
          secondGroup: traitsData.strength.secondGroup,
        },
        constitution: {
          value: traitsData.constitution.value,
          firstGroup: traitsData.constitution.firstGroup,
          secondGroup: traitsData.constitution.secondGroup,
        },
        dexterity: {
          value: traitsData.dexterity.value,
          firstGroup: traitsData.dexterity.firstGroup,
          secondGroup: traitsData.dexterity.secondGroup,
        },
        charisma: {
          value: traitsData.charisma.value,
          firstGroup: traitsData.charisma.firstGroup,
          secondGroup: traitsData.charisma.secondGroup,
        },
        wisdom: {
          value: traitsData.wisdom.value,
          firstGroup: traitsData.wisdom.firstGroup,
          secondGroup: traitsData.wisdom.secondGroup,
        },
        intelligence: {
          value: traitsData.intelligence.value,
          firstGroup: traitsData.intelligence.firstGroup,
          secondGroup: traitsData.intelligence.secondGroup,
        }
      });
    }
    
    this.traitsForm.valueChanges.subscribe(changes => {
      this.storageManagerService.addToStorage('traits', changes);
    });
  }

}
