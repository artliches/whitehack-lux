import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StorageManagerService } from '../storage-manager.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  statsForm = new FormGroup({
    hp: new FormGroup({
      current: new FormControl(''),
      max: new FormControl('')
    }),
    ac: new FormControl(''),
    st: new FormControl(''),
    violence: new FormGroup({
      av: new FormControl(),
      weapon: new FormControl(),
      dmg: new FormControl(),
    }),
    mv: new FormControl(''),
    init: new FormControl(''),
  });

  constructor(
    private storageManagerService: StorageManagerService
  ) { }

  ngOnInit(): void {
    const statsData: any = this.storageManagerService.getFromStorage('stats');
    if (statsData) {
      this.statsForm.setValue({
        hp: {
          current: statsData.hp.current,
          max: statsData.hp.max
        },
        ac: statsData.ac,
        st: statsData.st,
        violence: {
          av: statsData.violence.av,
          weapon: statsData.violence.weapon,
          dmg: statsData.violence.dmg
        },
        mv: statsData.mv,
        init: statsData.init,
      });
    }

    this.statsForm.valueChanges.subscribe(changes => {
      this.storageManagerService.addToStorage('stats', changes);
    });
  }

}
