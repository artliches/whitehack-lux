import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StorageManagerService } from '../storage-manager.service';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss']
})
export class IdentityComponent implements OnInit {
  identityForm = new FormGroup({
    name: new FormControl(''),
    species: new FormControl(''),
    vocation: new FormControl(''),
    extras: new FormControl('')
  });

  constructor(
    private storageManagerService: StorageManagerService
  ) { }

  ngOnInit(): void {
    const identityData: any = this.storageManagerService.getFromStorage('identity');
    if (identityData) {
      this.identityForm.setValue({
        name: identityData.name,
        species: identityData.species,
        vocation: identityData.vocation,
        extras: identityData.extras
      });
    }

    this.identityForm.valueChanges.subscribe(changes => {
      this.storageManagerService.addToStorage('identity', changes);
    });
  }
}
