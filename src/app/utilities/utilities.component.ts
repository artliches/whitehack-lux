import { Component, OnInit } from '@angular/core';
import { StorageManagerService } from '../storage-manager.service';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.scss']
})
export class UtilitiesComponent implements OnInit {
  showUtilities = false;
  killToggle = false;
  constructor(
    private storageManagerService: StorageManagerService
  ) { }

  ngOnInit(): void {
  }

  kill() {
    if (this.killToggle) {
      this.storageManagerService.clearStorage();
    }
    this.killToggle = !this.killToggle;
  }

  goBack() {
    this.killToggle = false;
  }

  save() {
    this.storageManagerService.saveSheet();
  }

  load(event: any) {
    this.storageManagerService.loadSheet(event);
  }
}
