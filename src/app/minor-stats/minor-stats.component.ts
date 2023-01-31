import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StorageManagerService } from '../storage-manager.service';

@Component({
  selector: 'app-minor-stats',
  templateUrl: './minor-stats.component.html',
  styleUrls: ['./minor-stats.component.scss']
})
export class MinorStatsComponent implements OnInit {
  minorStatsForm = new FormGroup({
    level: new FormControl(''),
    xp: new FormGroup({
      current: new FormControl(''),
      next: new FormControl(''),
    }),
  });

  constructor(
    private storageManagerService: StorageManagerService,
  ) { }

  ngOnInit(): void {
    const minorStatsData: any = this.storageManagerService.getFromStorage('minor');
    if (minorStatsData) {
      this.minorStatsForm.setValue({
        level: minorStatsData.level,
        xp: {
          current: minorStatsData.xp.current,
          next: minorStatsData.xp.next
        }
      });
    }

    this.minorStatsForm.valueChanges.subscribe(changes => {
      this.storageManagerService.addToStorage('minor', changes);
    })
  }
}
