import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StorageManagerService } from '../storage-manager.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  showNotes = false;
  notesForm = new FormGroup({
    notes : new FormControl()
  });

  constructor(
    private storageManagerService: StorageManagerService,
  ) { }

  ngOnInit(): void {
    const notesData: any = this.storageManagerService.getFromStorage('notes');
    if (notesData) {
      this.notesForm.setValue({
        notes: notesData.notes
      });
    }

    this.notesForm.valueChanges.subscribe(changes => {
      this.storageManagerService.addToStorage('notes', changes);
    })
  }

}
