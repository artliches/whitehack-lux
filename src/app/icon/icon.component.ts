import { Component, OnInit } from '@angular/core';
import { StorageManagerService } from '../storage-manager.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  imageUrl = '';

  constructor(
    private storageManagerService: StorageManagerService,
  ) { }

  ngOnInit(): void {
    const imageData: any = this.storageManagerService.getFromStorage('icon');
    this.imageUrl = imageData;
  }

  imageUpload(event: any) {
    const selectedImage = event.target.files[0];
    if (!selectedImage) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(selectedImage);
    fileReader.onload = () =>{
      if (fileReader.result) {
        this.imageUrl = fileReader.result.toString();
        this.storageManagerService.addToStorage('icon', this.imageUrl);
      }
    }
  }
}
